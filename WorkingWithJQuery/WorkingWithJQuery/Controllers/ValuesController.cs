using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WorkingWithJQuery.Models;

namespace WorkingWithJQuery.Controllers
{
    
    public class JobsController : ApiController
    {
        // GET api/values
        public List<Job> Get()
        {
            var job = new Job();
            //throw new NullReferenceException();
                return job.GetJobs();
        }


        public List<Job> post(Job editJob)
        {
            var job = new Job();
            //throw new NullReferenceException();
            var all= job.GetJobs();
            foreach(var item in all)
            {
                if (item.JobId == editJob.JobId)
                {
                    
                    item.Technology = editJob.Technology;
                    item.Description = editJob.Description;
                    item.Technology = editJob.Technology;
                }
            }
            return all;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
