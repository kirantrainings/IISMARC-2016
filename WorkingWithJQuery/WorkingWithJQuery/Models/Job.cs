using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WorkingWithJQuery.Models
{
    public class Job
    {
        public string JobId { get; set; }
        public string Technology { get; set; }
        public string Description { get; set; }
        public string ExperienceRange { get; set;}

        public List<Job> GetJobs()
        {
            var jobs = new List<Job>();

            jobs.Add(new Job()
            {
                JobId = "J100",
                Technology = ".Net",
                Description = "This job is for the dotnet",
                ExperienceRange="6-8Y"
            });
            jobs.Add(new Job()
            {
                JobId = "J101",
                Technology = ".Net",
                Description = "This job is for the dotnet",
                ExperienceRange = "6-8Y"
            });
            jobs.Add(new Job()
            {
                JobId = "J102",
                Technology = ".Angularjs",
                Description = "This job is for the Angularjs",
                ExperienceRange = "8-10Y"
            });
           // throw(new Exception());
            return jobs;
        }
    }
}