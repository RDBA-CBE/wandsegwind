

"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import InnerBanner from "@/components/Inner-Banner";
import { axiosGet, axiosPostForm } from "@/lib/api";
import parse from "html-react-parser";

function JobDetailsContent() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");
  const [fileName, setFileName] = useState("");

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    cv: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🚀 FETCH JOB DETAILS
  useEffect(() => {
  async function fetchJob() {
    if (!jobId) return;

    try {
      const res = await axiosGet.get(
        `/masters/career/get/?job_id=${jobId}&web_sts=1`
      );

      const raw = res.data.data || [];

      const formatted = raw.map((item) => ({
        id: item.data_uniq_id,
        title: item.title,
        type: item.job_type,
        requirements: item.description,
        level: item.role_type,
        salary: item.salary_range,
        data_uniq_id: item.data_uniq_id,
        key_responsibilities: item.key_responsibilities,
        job_id: item.job_id,
        location: item.city_name || item.state_name,
        ref_job_id: item.data_uniq_id,
        ref_location_id: item.city_id,
        required_skills: item.required_skills,
      }));

      setJob(formatted[0] || null);
    } catch (error) {
      console.log("Job Details Error:", error);
    } finally {
      setLoading(false);
    }
  }

  fetchJob();
}, [jobId]);


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading job details...
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex justify-center items-center min-h-screen text-center">
        <h1 className="text-xl font-bold text-red-500 mb-4">Job Not Found</h1>
        <Link href="/career" className="text-blue-600 underline">
          Back to Careers
        </Link>
      </div>
    );
  }

  // 🔥 FORM HANDLERS
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
  // Reset any previous error handling (optional)
  // setUploadError({ status: "", message: "" });

  const file = event.target.files?.[0];
  if (!file) return;

  // If you want size check like your example
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    alert("File size should be less than 5MB");
    event.target.value = "";
    return;
  }

  // Store selected file name in UI
  setFileName(file.name);

  const reader = new FileReader();

  reader.onload = () => {
    const base64String = reader.result.split(",")[1];

    // ⭐ Store Base64 directly into formData.cv
    setFormData((prev) => ({
      ...prev,
      cv: base64String,      // ONLY BASE64 STRING
      cv_name: file.name,    // Store filename separately (optional)
    }));
  };

  reader.onerror = () => {
    alert("Error reading the file. Please try again.");
  };

  reader.readAsDataURL(file);
};

 

  // 🚀 SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.cv || !formData.cv_name) {
    alert("Please upload your resume");
    setIsSubmitting(false);
    return;
  }

    try {
      

      const payload = {
        data_uniq_id: job.data_uniq_id,
        name: formData.name,
        email: formData.email,
        mobile: formData.phone,
        // qualification: "B.E",
        // ref_location_id: job.ref_location_id,
        ref_job_id: job.ref_job_id,
        image_name: formData.cv_name,
        image: formData.cv,
        message: formData.message || "Submitted",
        
      };

      console.log("FINAL PAYLOAD SENDING:", payload);

      const response = await axiosPostForm.post(
      "/masters/registration/?web_sts=1",
      payload,
      { headers: { "Content-Type": "application/json" } }
    );

      const resData = response.data;

    // 🚨 CHECK BACKEND STATUS
    if (resData?.action !== "success") {
    const backendError =
      resData?.message?.image_name ||
      resData?.message?.name ||
      (typeof resData?.message === "string" ? resData.message : null) ||
      "Submission failed";

    throw new Error(backendError);
  }

      setSubmitSuccess("Application submitted successfully!");
      setSubmitError("");


      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        cv: null,
        cv_name: "",
      });
      setFileName("");
      document.getElementById("file-input").value = "";


    } catch (error) {
 

  const backendMsg =
    error?.response?.data?.message?.image_name ||
    error?.response?.data?.message?.name ||
    error?.message ||
    "Something went wrong. Please try again.";

  setSubmitError(backendMsg);
  setSubmitSuccess("");

}

finally{
      setIsSubmitting(false);
    } 
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 py-4">
          <Link
            href="/career"
            className="inline-flex items-center gap-2 text-[#329ACD]"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Careers
          </Link>
        </div>
      </div>

      <div className="max-w-[94%] md:max-w-[90%] lg:max-w-[95%] 2xl:max-w-[80%] mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          <h1 className="text-3xl font-bold text-[#293E52] mb-3">
            {job.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-[#293E52] text-sm">
          
            {job?.salary ? (
          <div className="flex items-center gap-2">
            <img src="/images/sal.svg" alt="Salary" className="w-4 h-4" />
            <span className="text-sm text-[#293E52]">{job.salary}</span>
          </div>
        ) : null}

        
            {job.location && (
              <span className="flex items-center gap-2">
                <img src="/images/loc.svg" className="w-4 h-4" />
                <span className="text-sm text-[#293E52]">{job.location}</span>
              </span>
            )}



            {job.type && (
            <span className="flex items-center gap-2">
              <img src="/images/work.svg" className="w-4 h-4" />
              {job.type}
            </span>
            )}

             

        


          </div>

          <h2 className="text-xl font-semibold mb-3">Key Responsibilities</h2>
          <div
            className="pl-4 md:pl-6 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1 text-[#293E52]"
            dangerouslySetInnerHTML={{ __html: job.key_responsibilities }}
          />


          <h2 className="text-xl font-semibold mb-3">Job Requirements</h2>
          <div
            className="[&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1 text-[#293E52]"
            dangerouslySetInnerHTML={{ __html: job.requirements }}
          />

          <h2 className="text-xl font-semibold mb-3">Required Skills</h2>
          <div
            className="pl-4 md:pl-6 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1 text-[#293E52]"
            dangerouslySetInnerHTML={{ __html: job.required_skills }}
          />

          <div className="flex flex-col gap-2">
            <p className="text-md text-[#293E52] font-semibold">
              Send your complete CV with expected salary to{" "}
              <a
                href="mailto:hr@renfraenergy.com"
                className="text-[#329ACD] hover:underline"
              >
                hr@renfraenergy.com
              </a>{" "}
              mentioning the Job ID and vacancy in the subject, or fill out the
              form with relevant details.
            </p>
            <p className="text-sm text-[#293E52]">
              <span className="font-semibold text-red-600">*</span> Please note
              that only shortlisted candidates will be contacted.
            </p>
          </div>
        </div>

        <div className="bg-white border rounded-lg shadow-md p-6 h-fit sticky top-24">
          <h2 className="text-2xl font-bold text-[#293E52] mb-6">Apply Now</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded"
              placeholder="Full Name"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                let value = e.target.value;

                // Remove all non-digit characters
                value = value.replace(/\D/g, "");

                // Remove leading zero (only first zero)
                if (value.startsWith("0")) {
                  value = value.slice(1);
                }

                // Remove country code ONLY if total digits > 10
                if (value.length > 10) {

                  // Remove +91 or 91 or 0091 prefixes
                  if (value.startsWith("91") && value.length > 10) {
                    value = value.slice(2);
                  }

                  if (value.startsWith("0091") && value.length > 10) {
                    value = value.slice(4);
                  }
                }

                // Final value should not exceed 10 digits
                value = value.slice(0, 10);

                setFormData((prev) => ({ ...prev, phone: value }));
              }}

              maxLength={14} 
              required
              className="w-full px-4 py-2 border rounded"
              placeholder="Mobile Number"
            />


            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded"
              placeholder="Email Address"
            />

            <textarea
              name="message"
              maxLength={500}
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border rounded"
              placeholder="Your Message"
            />
            
            <div className="relative inline-block w-full">

  {/* Actual file input */}
  <input
    type="file"
    id="file-input"
    className="hidden"
    accept=".pdf,.doc,.docx"
    onChange={handleFileChange} 
    required
    
  />

  {/* Display input */}
  <input
    type="text"
    value={fileName || "Upload CV"}
    readOnly
    onClick={() => document.getElementById("file-input").click()}
    className={`w-full py-2 pr-9 pl-3 border border-gray-300 rounded cursor-pointer bg-white ${
      fileName ? "text-black" : "text-gray-500"
    }`}
  />

  {/* Clear (X) button */}
  {fileName && (
    <span
      className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer text-lg text-red-500 font-bold"
      onClick={(e) => {
        e.stopPropagation();
        setFileName("");
        setFormData((prev) => ({ ...prev, cv: null }));
        document.getElementById("file-input").value = "";
      }}
    >
      ✖
    </span>
  )}
</div>


            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#329ACD] to-[#3AB257] text-white py-3 rounded-lg font-semibold"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
            {submitError && (
              <p className="text-red-600 text-sm mt-3">
                {submitError}
              </p>
            )}

            {submitSuccess && (
              <p className="text-green-600 text-sm mt-3">
                {submitSuccess}
              </p>
            )}


          </form>
        </div>
      </div>
    </div>
  );
}

export default function JobDetailsPage() {
  return (
    <>
      <InnerBanner title="Career Details" bgImage="/images/career-bg.svg" />
      <Suspense
        fallback={
          <div className="min-h-screen flex justify-center items-center">
            Loading...
          </div>
        }
      >
        <JobDetailsContent />
      </Suspense>
    </>
  );
}