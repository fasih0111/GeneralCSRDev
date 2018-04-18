using System;
using System.Data;
namespace Models
{
    public class BALTeam : DALTeam
    {
        public int TeamID { get; set; }
        public string TeamName { get; set; }
        public string Description { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ImgUrl { get; set; }
        public int IssueID { get; set; }
        public int StatusID { get; set; }
        public bool IsActive { get; set; }

        public override DataRow InsertTeams(BALTeam BAL)
        {
            return base.InsertTeams(BAL);
        }
        public override DataRow InsertTeamMember(int TeamID, int UserID, int DesignationID, DateTime CreatedDate)
        {
            return base.InsertTeamMember(TeamID, UserID, DesignationID, CreatedDate);
        }
        public override DataTable GetTeamMembers(int TeamID)
        {
            return base.GetTeamMembers(TeamID);
        }
        public override DataTable GetTeams(int TeamID, int MyID)
        {
            return base.GetTeams(TeamID, MyID);
        }
        //        @TeamID INT,
        //@TeamName VARCHAR(50),
        //@Description VARCHAR(MAX),
        //@CreatedBy INT,
        //@CreatedDate DATETIME,
        //@ImgUrl VARCHAR(50),
        //@IssueID INT,
        //@StatusID INT,
        //@IsActive BIT

        public override DataTable GetTeamComment(int TeamID)
        {
            return base.GetTeamComment(TeamID);
        }
        public override DataTable GetIssueTitle(int IssueID)
        {
            return base.GetIssueTitle(IssueID);
        }
        public override DataTable GetNotTeamUser(int TeamID)
        {
            return base.GetNotTeamUser(TeamID);
        }
    }


}