using Common;
using Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GeneralCSR.Controllers
{
    public class TeamController : Controller
    {
        BALTeam BAL = new BALTeam();
        public ActionResult Index()
        {
            return View();
        }
        [AuthorizeSession]
        public ActionResult Profile(int id)
        {
            return View();
        }
        [AuthorizeSession]
        public ActionResult Create(int? id)
        {
            if (id != 0 && id != null)
                return View();
            return RedirectToAction("Index");
        }

        [HttpPost]
        public string GetTeamDetails(string id)
        {
            CFSession CFSess = (CFSession)Session["CFSess"];
            return JsonConvert.SerializeObject(BAL.GetTeams(Convert.ToInt32(id), Convert.ToInt32(CFSess.ID)));
        }

        [HttpPost]
        public string GetTeams()
        {
            CFSession CFSess = (CFSession)Session["CFSess"];
            return JsonConvert.SerializeObject(BAL.GetTeams(0, Convert.ToInt32(CFSess.ID)));
        }


        [HttpPost]
        public string GetMyTeams()
        {
            CFSession CFSess = (CFSession)Session["CFSess"];
            return JsonConvert.SerializeObject(BAL.GetTeams(0, Convert.ToInt32(CFSess.ID)));
        }


        [HttpPost]
        public string GetTeamMembers(string id)
        {
            return JsonConvert.SerializeObject(BAL.GetTeamMembers(Convert.ToInt32(id)));
        }

        [HttpPost]
        public string InsertTeamMember(string TeamID)
        {

            //System.Threading.Thread.Sleep(3000);
            CFSession CFSess = (CFSession)Session["CFSess"];
            return JsonConvert.SerializeObject(BAL.InsertTeamMember(Convert.ToInt32(TeamID), Convert.ToInt32(CFSess.ID), 2, DateTime.Now));
        }


        [HttpPost]
        public string CreateTeam(string TeamName, string Description, int IssueID, string ImgUrl)
        {
            //if (
            //    (TeamName != "" & TeamName != null) &
            //    (Description != "" & Description != null) &
            //    (IssueID != 0) &
            //    (ImgUrl != "" & ImgUrl != null)
            //    )

            if (FCommon.CheckEmptyStrings(TeamName, Description, ImgUrl) && FCommon.CheckEmptyInt(IssueID))
            {
                CFSession CFSess = (CFSession)Session["CFSess"];
                BAL.TeamID = 0;
                BAL.TeamName = TeamName;
                BAL.Description = Description;
                BAL.CreatedBy = Convert.ToInt32(CFSess.ID);
                BAL.CreatedDate = DateTime.Now;
                BAL.ImgUrl = ImgUrl;
                BAL.IssueID = IssueID;
                BAL.StatusID = 1;
                BAL.IsActive = true;
                DataRow dr = BAL.InsertTeams(BAL);
                return JsonConvert.SerializeObject(dr);
            }
            else
            {
                return JsonConvert.SerializeObject(FCommon.ConvertReturn("Wrong"));
            }
        }
    }
}
