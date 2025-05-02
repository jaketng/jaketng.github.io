export default function App() {
  return (
    <div className="min-h-screen bg-white text-black px-8 pt-20 font-sans">
      <div className="max-w-[77rem] mx-auto">
        {/* Top row */}
        <div className="flex justify-between items-end mb-24">
          {/* Name */}
          <h1 className="text-[94px] font-black font-[690] leading-none tracking-tighter">
            jake bowden.
          </h1>

          {/* Tagline + icons stacked */}
          <div className="flex flex-col items-end justify-between h-full">
            {/* Icons row */}
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/in/jake-phinehas-bowden/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#8b94a7] hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 
        .513 16 1.146v13.708c0 .633-.526 1.146-1.175 
        1.146H1.175C.526 16 0 15.487 0 
        14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 
        0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 
        3.226 2.4 3.934c0 .694.521 1.248 
        1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 
        1.232-.878.869 0 1.216.662 
        1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 
        0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 
        0 7.225 0 7.225z"
                  />
                </svg>
              </a>
            </div>

            {/* Tagline */}
            <p className="text-[17px] text-black">
              software engineer • aspiring pm
            </p>
          </div>
        </div>

        {/* Columns */}
        <div className="flex flex-col md:flex-row gap-20">
          {/* Left */}
          <div className="md:w-[45%]">
            <h2 className="text-[44px] font-[400] tracking-tighter">
              a brief introduction
            </h2>
            <div className="space-y-2 text-[17px] font-normal">
              <p>jahnel group • siriusxm →</p>
              <p>phillips academy andover ’21 • columbia engineering ’25 →</p>
              <p>saratoga • andover • nyc • ??? →</p>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-[55%] pt-7 space-y-4 text-[17px] font-normal">
            <p>
              I recently graduated from Columbia Engineering with a B.S. in
              Computer Science and currently work as a software engineer at
              SiriusXM.
            </p>
            <p>
              I'm passionate about product development and excited to transition
              into product management where I can help shape meaningful user
              experiences.
            </p>
            <p>
              Previously, I worked as a full stack developer at Jahnel Group,
              where I first gained hands-on experience in full-stack
              engineering.
            </p>
            <p>
              Back in high school, I founded Reboot Tech—a nonprofit that
              refurbished and donated used computers to kids in need.
            </p>
            <p>
              Outside of work, I enjoy hiking, playing guitar, and training
              Brazilian jiu-jitsu.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="md:w-[45%]">
          <h2 className="text-[44px] font-normal">projects</h2>
          <p>HCDI assignment →</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/s-IN1v0aiAs?si=tI5SUSHMWvp2vI8_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
