﻿using Common;
using Microsoft.AspNet.SignalR;
using Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GeneralCSR.Controllers
{
    public class HomeController : Controller
    {
        BALPosts BALPost = new BALPosts();
        BALUsers BALUser = new BALUsers();

        [AuthorizeSession]
        public ActionResult Index()
        {
            Response.Cache.SetExpires(DateTime.UtcNow.AddMinutes(-1));
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.Cache.SetNoStore();
            return View();
        }

        [AuthorizeSession]
        public ActionResult Category()
        {
            return View();
        }


        [AuthorizeSession]
        public ActionResult Invitation()
        {
            return View();
        }

        [AuthorizeSession]
        public ActionResult StarredMessages()
        {
            return View();
        }

        [HttpPost]
        public string GetStarredComments()
        {
            CFSession CFSess = (CFSession)Session["CFSess"];
            string UID = CFSess.ID;
            return JsonConvert.SerializeObject(BALPost.GetStarredComments(UID));
        }

        [AuthorizeSession]
        public ActionResult Archive()
        {
            return View();
        }

        [HttpPost]
        [AuthorizeSession]
        public string UserOnConnect(string ConnectionID)
        {
            CFSession CFSess = (CFSession)Session["CFSess"];
            var hubContext = GlobalHost.ConnectionManager.GetHubContext<GeneralHub>();

            //if (!UserConnIDs.DConnIds.ContainsValue(CFSess.ID))
            //    hubContext.Clients.All.setUserOnlineOffline(CFSess.ID, "Online");

            UserConnIDs.DConnIds.Add(ConnectionID, CFSess.ID);

            return JsonConvert.SerializeObject("");
            //CFSession CFSess = (CFSession)Session["CFSess"];
            //return Convert.ToInt32(CFSess.ID);
        }

        [HttpPost]
        public string InsertPost(string Title, string Category, string Body, string FileName, string FileGeneratedName)
        {

            //System.Threading.Thread.Sleep(20000);
            if (Category == "" || Category == null)
            {
                Category = "1";
            }
            CFSession CFSess = (CFSession)Session["CFSess"];
            BALPost.ID = 0;
            BALPost.UserID = Convert.ToInt32(CFSess.ID);
            BALPost.Title = Title;
            BALPost.CategoryID = Convert.ToInt32(Category);
            BALPost.Body = Body;
            BALPost.IsPublic = true;
            BALPost.IsActive = true;

            BALPost.OrignalName = FileName;
            BALPost.GeneratedName = FileGeneratedName;

            DataRow dr = BALPost.InsertUpdatePosts(BALPost, "0", "10");
            if (dr != null)
            {
                var hubContext = GlobalHost.ConnectionManager.GetHubContext<GeneralHub>();
                hubContext.Clients.All.setPost(dr);
            }

            return JsonConvert.SerializeObject(dr);
        }

        [HttpPost]
        public string GetAllCategories()
        {
            DataTable dt = BALPost.GetCategories("", "");
            return JsonConvert.SerializeObject(dt);
        }

        [HttpPost]
        [AuthorizeSession]
        public string GetUserDetails(string UserID)
        {
            string UID = "";
            try
            {
                UID = Convert.ToInt32(UserID).ToString();
            }
            catch
            {
                CFSession CFSess = (CFSession)Session["CFSess"];
                UID = CFSess.ID;
            }
            return JsonConvert.SerializeObject(BALUser.GetUsers(UID, "", ""));
        }

        [HttpPost]
        [AuthorizeSession]
        public string GetHeaderDetails()
        {
            CFSession CFSess = (CFSession)Session["CFSess"];
            return JsonConvert.SerializeObject(CFSess);
        }

        [HttpPost]
        public string GetUserProfileDetails(string UserID)
        {
            //System.Threading.Thread.Sleep(2000);
            string UID = "";
            CFSession CFSess = (CFSession)Session["CFSess"];
            try
            {
                UID = Convert.ToInt32(UserID).ToString();
            }
            catch
            {
                UID = CFSess.ID;
            }

            return JsonConvert.SerializeObject(BALUser.GetUserDetailsForProfile(CFSess.ID, UID));
        }
        [HttpPost]
        public string GetPosts(string ID, string UserID, string Offset, string Next)
        {
            //System.Threading.Thread.Sleep(3000);
            string UID = "";
            CFSession CFSess = (CFSession)Session["CFSess"];
            try
            {
                UID = Convert.ToInt32(UserID).ToString();
            }
            catch
            {
                UID = CFSess.ID;
            }
            return JsonConvert.SerializeObject(BALPost.GetPosts(CFSess.ID, ID, UID, Offset, Next));
        }


        [HttpPost]
        public string GetNGO(string ID)
        {
            return JsonConvert.SerializeObject(BALUser.GetNgo());
        }

        [HttpPost]
        public string GetCSR(string ID)
        {
            return JsonConvert.SerializeObject(BALUser.GetCsr());
        }

        [HttpPost]
        public string GetPostsIFollow(string ID, string UserID)
        {
            //System.Threading.Thread.Sleep(1000);
            string UID = "";
            CFSession CFSess = (CFSession)Session["CFSess"];
            try
            {
                UID = Convert.ToInt32(UserID).ToString();
            }
            catch
            {

                UID = CFSess.ID;
            }
            return JsonConvert.SerializeObject(BALPost.GetPostsIFollow(CFSess.ID, ID, UID));
        }

        [HttpPost]
        public string GetFollowers(string UserID)
        {
            string UID = "";
            try
            {
                UID = Convert.ToInt32(UserID).ToString();
            }
            catch
            {
                CFSession CFSess = (CFSession)Session["CFSess"];
                UID = CFSess.ID;
            }
            return JsonConvert.SerializeObject(BALUser.GetFollowers(UID, ""));
        }

        [HttpPost]
        public string GetFollowings(string UserID)
        {
            string UID = "";
            try
            {
                UID = Convert.ToInt32(UserID).ToString();
            }
            catch
            {
                CFSession CFSess = (CFSession)Session["CFSess"];
                UID = CFSess.ID;
            }
            return JsonConvert.SerializeObject(BALUser.GetFollowers("", UID));
        }

        [HttpPost]
        public string InsertPostFollow(string RefID)
        {
            //System.Threading.Thread.Sleep(10000);
            CFSession CFSess = (CFSession)Session["CFSess"];

            DataTable dr = BALPost.InsertDeletePostFollow(CFSess.ID, RefID);
            if (dr != null)
            {
                var hubContext = GlobalHost.ConnectionManager.GetHubContext<GeneralHub>();
                hubContext.Clients.All.setFollow(dr);
            }

            return JsonConvert.SerializeObject(dr);
        }

        [HttpPost]
        public string InsertCommentEndorse(string RefID)
        {
            //System.Threading.Thread.Sleep(10000);
            CFSession CFSess = (CFSession)Session["CFSess"];

            DataTable dr = BALPost.InsertDeleteEndorse(CFSess.ID, RefID);
            if (dr != null)
            {
                var hubContext = GlobalHost.ConnectionManager.GetHubContext<GeneralHub>();
                hubContext.Clients.All.setCommentEndorse(dr);
            }

            return JsonConvert.SerializeObject(dr);
        }

        [HttpPost]
        public string InsertCommentSupport(string RefID)
        {
            //System.Threading.Thread.Sleep(10000);
            CFSession CFSess = (CFSession)Session["CFSess"];

            DataTable dr = BALPost.InsertDeleteSupport(CFSess.ID, RefID);
            if (dr != null)
            {
                var hubContext = GlobalHost.ConnectionManager.GetHubContext<GeneralHub>();
                hubContext.Clients.All.setCommentSupport(dr);
            }

            return JsonConvert.SerializeObject(dr);

        }

        [HttpPost]
        public string InsertCommentSupportOppose(string RefID, string type)
        {
            //System.Threading.Thread.Sleep(10000);
            CFSession CFSess = (CFSession)Session["CFSess"];

            DataTable dr = BALPost.InsertSupportOppose(Convert.ToInt32(CFSess.ID), Convert.ToInt32(RefID), Convert.ToBoolean(type));
            if (dr != null)
            {
                var hubContext = GlobalHost.ConnectionManager.GetHubContext<GeneralHub>();
                hubContext.Clients.All.setCommentSupportOppose(dr);
            }

            return JsonConvert.SerializeObject(dr);

        }

        [HttpPost]
        [AuthorizeSession]
        public string InsertCommentFlag(string RefID)
        {
            //System.Threading.Thread.Sleep(10000);
            CFSession CFSess = (CFSession)Session["CFSess"];

            DataTable dr = BALPost.InsertDeleteCommentFlagged(CFSess.ID, RefID);
            if (dr != null)
            {
                var hubContext = GlobalHost.ConnectionManager.GetHubContext<GeneralHub>();
                hubContext.Clients.All.setCommentFlagged(dr);
            }

            return JsonConvert.SerializeObject(dr);

        }

        [HttpPost]
        public string InsertComment(string RefID, string RefType, string Body, string FileName, string FileGeneratedName)
        {
            CFSession CFSess = (CFSession)Session["CFSess"];
            DataTable dr = BALPost.InsertUpdateComment("", CFSess.ID, RefID, RefType, Body, true, FileName, FileGeneratedName);
            if (dr != null)
            {
                var hubContext = GlobalHost.ConnectionManager.GetHubContext<GeneralHub>();
                hubContext.Clients.All.setComment(dr);
            }
            return JsonConvert.SerializeObject(dr);
        }

        [HttpPost]
        public string UpdateComment(string ID, string RefID, string RefType, string Body)
        {
            CFSession CFSess = (CFSession)Session["CFSess"];
            DataTable dr = BALPost.InsertUpdateComment(ID, CFSess.ID, RefID, RefType, Body, true, "", "");
            if (dr != null)
            {
                var hubContext = GlobalHost.ConnectionManager.GetHubContext<GeneralHub>();
                hubContext.Clients.All.editComment(dr);
            }
            return JsonConvert.SerializeObject(dr);
        }

        [HttpPost]
        public string DeleteComment(string ID)
        {
            CFSession CFSess = (CFSession)Session["CFSess"];
            DataTable dr = BALPost.UpdateCommentStatus(ID, false);
            if (dr != null)
            {
                var hubContext = GlobalHost.ConnectionManager.GetHubContext<GeneralHub>();
                hubContext.Clients.All.deleteComments(dr);
            }
            return JsonConvert.SerializeObject(dr);
        }

        [HttpPost]
        public string InsertCommentAttachment(string RefID, string Title, string Description, string FileName, string FileGeneratedName)
        {
            CFSession CFSess = (CFSession)Session["CFSess"];
            DataTable dr = BALPost.InsertUpdateCommentAttachment("", CFSess.ID, RefID, Title, Description, true, FileName, FileGeneratedName);
            if (dr != null)
            {
                var hubContext = GlobalHost.ConnectionManager.GetHubContext<GeneralHub>();
                hubContext.Clients.All.setComment(dr);
            }
            return JsonConvert.SerializeObject(dr);
        }

        [HttpPost]
        public string GetComment(string ID, string RefID, string RefType)
        {
            //System.Threading.Thread.Sleep(20000);
            CFSession CFSess = (CFSession)Session["CFSess"];
            return JsonConvert.SerializeObject(BALPost.GetComments(CFSess.ID, ID, RefID, RefType));
        }

        [HttpPost]
        public string GetCommentsByCount(string ID, string RefID, string RefType, string Offset, string Next)
        {
            //System.Threading.Thread.Sleep(20000);
            CFSession CFSess = (CFSession)Session["CFSess"];

            return JsonConvert.SerializeObject(BALPost.GetCommentsByCount(CFSess.ID, ID, RefID, RefType, Offset, Next));
        }

        [HttpPost]
        public string FullSearch(string Body)
        {
            //System.Threading.Thread.Sleep(500);
            return JsonConvert.SerializeObject(BALUser.MainSearch(((CFSession)Session["CFSess"]).ID, Body));
        }

        [HttpPost]
        public string GetHashtags(string Tag)
        {
            // System.Threading.Thread.Sleep(5000);
            return JsonConvert.SerializeObject(BALPost.GetHashtags());
        }

        [HttpPost]
        public string SendInvitaion(string FName, string LName, string Email, string Desc)
        {

            string Content = FCommon.GetEmailTemplateBody("Invitation.txt");
            //Content = Content.Replace("@Logo", "<img src='http://www.salamislam.com/sites/default/files/video_poster/Eid-ul-Fitr-2013.-India-2.jpg'>");
            ////FCommon.SendEmail("info@tresmark.com", "", "Tresmark Talk Chat", Content);

            //FCommon.SendEmail("fasih01111@gmail.com", Email, "Invitation", Content);
            CFSession CFSess = (CFSession)Session["CFSess"];
            string Fasih = HttpUtility.UrlEncode(FCommon.Encrypt("ToID:" + ((CFSession)Session["CFSess"]).ID + "~ToEmail:" + Email + "~FName:" + FName + "~LName:" + LName + "~Desc:" + Desc));

            string link = "http://175.107.202.227:8080/Account/Login?q=" + Fasih;
            Content = Content.Replace("@Link", link);
            Content = Content.Replace("@MyName", CFSess.FirstName + " " + CFSess.LastName);
            Content = Content.Replace("@UserName", FName + " " + LName);
            Content = Content.Replace("@Note", Desc);
            if (Desc != "")
            {
                Content = Content.Replace("@DisplayNote", "block");
            }
            else
            {
                Content = Content.Replace("@DisplayNote", "none");
            }

            if (FCommon.SendEmail("fasih01111@gmail.com", Email, "Invitation", Content))
            {
                return JsonConvert.SerializeObject(BALUser.InsertUpdateInvitation(((CFSession)Session["CFSess"]).ID, Email, 0));
            }
            return JsonConvert.SerializeObject("");
        }

        [HttpPost]
        public string Upload()
        {
            string FileOrignalName = "";
            string FileGeneratedName = "";
            string FileOrignalReturnName = "";
            string FileGeneratedReturnName = "";
            string FilePath = "~/uploads/files/";
            for (int i = 0; i < Request.Files.Count; i++)
            {
                var file = Request.Files[i];
                FileOrignalName = file.FileName;
                FileGeneratedName = FCommon.GenerateFileName(file.FileName);
                var path = Path.Combine(Server.MapPath(FilePath), FileGeneratedName);
                file.SaveAs(path);
                //FCommon.VaryQualityLevel(path);

                if (i > 0)
                {
                    FileOrignalReturnName += ":" + FileOrignalName;
                    FileGeneratedReturnName += ":" + FileGeneratedName;
                }
                else
                {
                    FileOrignalReturnName += FileOrignalName;
                    FileGeneratedReturnName += FileGeneratedName;
                }
            }
            return JsonConvert.SerializeObject(FileOrignalReturnName + "|" + FileGeneratedReturnName);
        }

        [HttpPost]
        public JsonResult fileuploadsingle(HttpPostedFileBase file1)
        {
            //string FileOrignalName = "";
            //string FileGeneratedName = "";
            //string FileOrignalReturnName = "";
            //string FileGeneratedReturnName = "";
            //string FilePath = "~/uploads/files/";
            //for (int i = 0; i < Request.Files.Count; i++)
            //{
            //    var file = Request.Files[i];
            //    FileOrignalName = file.FileName;
            //    FileGeneratedName = FCommon.GenerateFileName(file.FileName);
            //    var path = Path.Combine(Server.MapPath(FilePath), FileGeneratedName);
            //    file.SaveAs(path);
            //    //FCommon.VaryQualityLevel(path);

            //    if (i > 0)
            //    {
            //        FileOrignalReturnName += ":" + FileOrignalName;
            //        FileGeneratedReturnName += ":" + FileGeneratedName;
            //    }
            //    else
            //    {
            //        FileOrignalReturnName += FileOrignalName;
            //        FileGeneratedReturnName += FileGeneratedName;
            //    }
            //}
            //return JsonConvert.SerializeObject(FileOrignalReturnName + "|" + FileGeneratedReturnName);
            var movies = new List<object>();

            movies.Add(new { Title = "Ghostbusters", Genre = "Comedy", Year = 1984 });
            movies.Add(new { Title = "Gone with Wind", Genre = "Drama", Year = 1939 });
            movies.Add(new { Title = "Star Wars", Genre = "Science Fiction", Year = 1977 });

            return Json(movies, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [AuthorizeSession]
        public string GetUserForTeam(string ID)
        {
            return JsonConvert.SerializeObject(BALUser.GetUsers("", "", ""));
        }

    }
}
