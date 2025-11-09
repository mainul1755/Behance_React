  
 
 const CreativeCloud = () => {
   return (
     <main className="bg-[#F2F2F2] flex justify-center py-10 mb-3">
      <div className="max-w-7x2  flex flex-col lg:flex-row gap-10 items-start px-12">

        {/* Left Section */}
        <div className="lg:w-1/4">
          <h2 className="text-2xl font-semibold mb-3">Create with Creative Cloud</h2>
          <p className="text-gray-600 text-sm mb-5">
            Whatever you want to create, Adobe Creative Cloud has what you need to make it amazing.
          </p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition">
            See all plans
          </button>
        </div>

        {/* Right Section (Cards) */}
        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="flex flex-col">
            <img src="/C1.png" alt="C" />
            <div>
              <h3 className="font-semibold text-sm flex items-center space-x-2 pt-3">
                <img src="/CCA.png" alt="" />
                <span>Creative Cloud All Apps</span>
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                Easily create stunning social graphics, short videos, and web pages that make you stand out.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col">
             <img src="/C2.png" alt="" />
            <div>
              <h3 className="font-semibold text-sm flex items-center space-x-2 pt-3">
                 <img src="/Ps.png" alt="" />
                <span>Photoshop - Image editing & design</span>
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                Create beautiful images, graphics, paintings, and 3D artwork on your desktop or iPad.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col">
             <img src="/C3.png" alt="" />
            <div>
              <h3 className="font-semibold text-sm flex items-center space-x-2 pt-3">
                <img src="/Ai.png" alt="" />
                <span>Illustrator - Logos, icons & illustration</span>
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                Create beautiful designs, icons, and more — then use them anyplace at any size.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col">
             <img src="/C4.png" alt="" />
            <div>
              <h3 className="font-semibold text-sm flex items-center space-x-2 pt-3">
                 <img src="/Pr.png" alt="" />
                <span>Premiere Pro - Video editing</span>
              </h3>
              <p className="text-gray-500 text-xs mt-1">
                Create everything from social clips to feature films with the leading video editor.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
   )
 }
 
 export default CreativeCloud
 