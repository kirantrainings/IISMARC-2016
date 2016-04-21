(function () {
    var getJobs, showJobsInTable, buildRow;

    $(document).ready(function () {
        $('#divRegister').hide();
        getJobs();
        $('#btnSave').bind('click', saveJob);
    });

    function saveJob() {
        var job = {}
        job.JobId= $('#txtJobId').val();
        job.Description=$('#txtJobDescription').val();
        job.Technology = $('#txtJobTechnology').val();
        job.ExperienceRange = $('#txtJobExpreience').val();

        $.ajax({
            url: 'api/jobs/SaveJob',
            method:"POST",
            data:  job,
            success: (function (response) {
                console.log("Hey i got the response");
                showJobsInTable(response);
            }),
            error: (function (response, status) {
                console.log("Hey i got the response");
                console.log(status);
            })
        })
    }

    //method : GET,PUT,POST,DELETE
    getJobs = function () {
        //$.ajax({
        //    url: "api/jobs",
        //    method: "GET"
        //}).then(function (response) {
        //    console.log(response);
        //    showJobsInTable(response);
        //});

        console.log("I am Starting");
        $.ajax({
            url: "api/jobs/",
            method: "GET",
           // async:false,
            success: (function (response) {
                console.log("Hey i got the response");
                showJobsInTable(response);
            }),
            error: (function (response,status) {
                console.log("Hey i got the response");
                console.log(status);
            })
        });
        console.log("I am finishing my job");
    };

    showJobsInTable = function (jobs) {
        $('#jobTable').html('');
        $.each(jobs, function (index, job) {
            var row = buildRow(job)
            $('#jobTable').append(row);
        });
    };

    buildRow = function (job) {
        var row = $('<tr>');
        var jobId = $("<td>"),
            jobDescription = $("<td>"),
            jobTechnology = $("<td>"),
            jobExperience = $("<td>");

        editJob = $('<td>');
        editJobButton = $('<button>');
        editJobButton.addClass("btn btn-primary");
        editJobButton.text("Edit");
        editJobButton.bind('click',{param:job}, handleClick);
        $(editJob).append(editJobButton);


        $(jobId).text(job.JobId);
        $(jobTechnology).text(job.Technology);
        $(jobDescription).text(job.Description);
        $(jobExperience).text(job.ExperienceRange);

        $(row).append(jobId);
        $(row).append(jobTechnology);
        $(row).append(jobDescription);
        $(row).append(jobExperience);
        $(row).append(editJob);
        return row;
    };
    function handleClick(event) {
        console.log(event.data.param);
        $('#txtJobId').val(event.data.param.JobId);
        $('#txtJobId').hide();
        $('#txtJobDescription').val(event.data.param.Description);
        $('#txtJobTechnology').val(event.data.param.Technology);
        $('#txtJobExpreience').val(event.data.param.ExperienceRange);
    };
})();