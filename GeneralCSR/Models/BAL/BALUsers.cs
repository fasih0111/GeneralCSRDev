using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Models
{
    public class BALUsers : DALUsers
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Pass { get; set; }
        public bool IsEmailConfirmed { get; set; }
        public bool IsActive { get; set; }

        public override string InsertUpdateUser(BALUsers BAL)
        {
            return base.InsertUpdateUser(BAL);
        }
        public override System.Data.DataRow GetUserDataByEmailOrUserID(string UserID, string Email)
        {
            return base.GetUserDataByEmailOrUserID(UserID, Email);
        }
        public override System.Data.DataRow LoginAuthentication(string Email, string Pass)
        {
            return base.LoginAuthentication(Email, Pass);
        }
        public override DataTable GetUsers(string UserID, string UserName, string Email)
        {
            return base.GetUsers(UserID, UserName, Email);
        }
        public override System.Data.DataTable InsertDeleteFollowers(string UserID, string FollowerID)
        {
            return base.InsertDeleteFollowers(UserID, FollowerID);
        }
        public override string InsertDeleteFollowings(string UserID, string FollowingID)
        {
            return base.InsertDeleteFollowings(UserID, FollowingID);
        }
        public override System.Data.DataTable GetFollowers(string UserID, string FollowerID)
        {
            return base.GetFollowers(UserID, FollowerID);
        }
        public override System.Data.DataTable GetFollowings(string UserID, string FollowingID)
        {
            return base.GetFollowings(UserID, FollowingID);
        }
        public override System.Data.DataTable MainSearch(string UserID, string SearchText)
        {
            return base.MainSearch(UserID, SearchText);
        }
        public override DataRow GetUserDetailsForProfile(string MyID, string UserID)
        {
            return base.GetUserDetailsForProfile(MyID, UserID);
        }
        public override DataRow InsertUserInterestedCategories(string UserID, string RefIDs)
        {
            return base.InsertUserInterestedCategories(UserID, RefIDs);
        }
        public override DataRow InsertUpdateInvitation(string UserID, string ToEmail, int IsAccepted)
        {
            return base.InsertUpdateInvitation(UserID, ToEmail, IsAccepted);
        }
        public override DataRow ChangePassword(string Email, string Pass)
        {
            return base.ChangePassword(Email, Pass);
        }
        public override DataRow UpdateUserDescriptions(int UserID, int DescribeID, string UserBrief, bool IsExpert, string Address, DateTime DOB, bool Gender, string Expertise)
        {
            return base.UpdateUserDescriptions(UserID, DescribeID, UserBrief, IsExpert, Address, DOB, Gender, Expertise);
        }
        public override DataRow IsFirstLogin(int UserID)
        {
            return base.IsFirstLogin(UserID);
        }


    }
}
