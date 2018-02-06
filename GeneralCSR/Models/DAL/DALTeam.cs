using Common;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;


namespace Models
{
    public class DALTeam
    {
        protected DALTeam() { }

        public virtual DataRow InsertTeams(BALTeam BAL)
        {
            SqlParameter[] param = {
                                       new SqlParameter("@TeamID", BAL.TeamID),
                                       new SqlParameter("@TeamName",BAL.TeamName),
                                       new SqlParameter("@Description",BAL.Description),
                                       new SqlParameter("@CreatedBy",BAL.CreatedBy),
                                       new SqlParameter("@CreatedDate",BAL.CreatedDate),
                                       new SqlParameter("@ImgUrl",BAL.ImgUrl),
                                       new SqlParameter("@IssueID", BAL.IssueID),
                                       new SqlParameter("@StatusID",BAL.StatusID),
                                       new SqlParameter("@IsActive",BAL.IsActive)
                               };
            return SqlHelper.ExecuteDataTable(FCommon.ConStr, CommandType.StoredProcedure, "spInsertTeams", param).Rows[0];
        }

        public virtual DataRow InsertTeamMember(int TeamID, int UserID, int DesignationID, DateTime CreatedDate)
        {
            SqlParameter[] param = {
                                       new SqlParameter("@TeamID", TeamID),
                                       new SqlParameter("@UserID", UserID),
                                       new SqlParameter("@DesingationID", DesignationID),
                                       new SqlParameter("@CreatedDate", CreatedDate),
                               };
            return SqlHelper.ExecuteDataTable(FCommon.ConStr, CommandType.StoredProcedure, "spInsertTeamMember", param).Rows[0];
        }
        
        public virtual DataTable GetTeams(int TeamID, int MyID)
        {
            SqlParameter[] param = {
                                       new SqlParameter("@TeamID", TeamID),
                                       new SqlParameter("@MyID", MyID)
                               };
            return SqlHelper.ExecuteDataTable(FCommon.ConStr, CommandType.StoredProcedure, "spGetTeams", param);
        }

        public virtual DataTable GetTeamMembers(int TeamID)
        {
            SqlParameter[] param = {
                                       new SqlParameter("@TeamID", TeamID)
                               };
            return SqlHelper.ExecuteDataTable(FCommon.ConStr, CommandType.StoredProcedure, "spGetTeamMembers", param);
        }

    }
}