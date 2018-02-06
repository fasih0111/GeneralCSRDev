using Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Collections
{
    public class UserCollection
    {
        private static UserCollection instance = new UserCollection();
        private Dictionary<string, int> usersEmailList;
        object mutex;

        private UserCollection()
        {
            usersEmailList = new Dictionary<string, int>();
            mutex = new object();
        }

        public static UserCollection Instance
        {
            get { return instance; }
        }

        public void LoadUsersEmailList()
        {
            try
            {
                lock (mutex)
                {
                    //usersEmailList = new BALUsers().GetFollowers().AsEnumerable()
                    //    .ToDictionary<DataRow, string, int>(row => row[0].ToString(),
                    //                   row => Convert.ToInt32(row[1]));
                }
            }
            catch (Exception ex)
            {
                //
            }
        }
        public Dictionary<string, int> UsersEmailList
        {
            get
            {
                lock (mutex)
                {
                    return usersEmailList;
                }
            }
        }
    }
}