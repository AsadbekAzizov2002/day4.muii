// import React, { useState } from "react";
// import AddIcon from "@mui/icons-material/Add";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// const Googles = () => {
//   const [sites, setSites] = useState([]);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [name, setName] = useState("");
//   const [url, setUrl] = useState("");

//   const handleAddClick = () => {
//     setShowAddForm(true);
//   };

//   const handleAddSite = () => {
//     setSites([...sites, { name, url }]);
//     setName("");
//     setUrl("");
//     setShowAddForm(false);
//   };

//   const handleDeleteSite = () => {
//     setShowAddForm(false);
//   };

//   return (
//     <div className="p-4 flex items-center justify-center gap-3">
//       <div className="flex items-center justify-between ">
//         {!showAddForm && (
//           <button
//             onClick={handleAddClick}
//             className=" flex items-center text-[15px] bg-[rgba(1,4,4,0.49)] px-3 py-3 font-medium rounded-3xl text-white hover:underline"
//           >
//             <AddIcon />
//           </button>
//         )}
//       </div>
//       {showAddForm && (
//         <div className="mb-4">
//           <div className=" flex flex-colx-1 w-[350px]">
//             <input
//               type="text"
//               placeholder="Name"
//               className="border rounded px-2 py-1 mr-2"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="URL"
//               className="border rounded px-2 py-1 mr-2"
//               value={url}
//               onChange={(e) => setUrl(e.target.value)}
//             />
//           </div>
//           <div className=" mt-5 ml-36">
//             <button
//               onClick={handleAddSite}
//               className="bg-blue-500 rounded-2xl text-white px-4 py-3  mr-2"
//             >
//               Add
//             </button>
//             <button
//               onClick={handleDeleteSite}
//               className=" bg-black text-white px-4 py-3 rounded-3"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       )}
//       <div className=" mt-[30px] grid grid-cols-3">
//         {sites.map((site, index) => (
//           <div
//             key={index}
//             className="flex items-center text-[15px] flex-col hover:bg-slate-400  w-[80px] h-20 font-medium text-white hover:underline"
//           >
//             <div className=" w-full text-end">
//               <button>
//                 <  />
//               </button>
//             </div>
//             <div className="w-12 h-12 bg-[rgba(1,4,4,0.49)] rounded-3xl flex items-center justify-center">
//               <img
//                 src={`https://www.google.com/s2/favicons?domain=${site.url}`}
//                 alt="logo"
//                 className="w-10 h-10"
//               />
//             </div>
//             <a href={site.url} className="text-black">
//               {site.name}
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Googles;




import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Googles = () => {
  const [sites, setSites] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showMoreOptionsIndex, setShowMoreOptionsIndex] = useState(null); // Track index of the site for which more options are shown
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleAddClick = () => {
    setShowAddForm(true);
  };

  const handleAddSite = () => {
    setSites([...sites, { name, url }]);
    setName("");
    setUrl("");
    setShowAddForm(false);
  };

  const handleDeleteSite = (index) => {
    const updatedSites = sites.filter((site, i) => i !== index);
    setSites(updatedSites);
    // Hide more options if they were shown for the deleted site
    if (showMoreOptionsIndex === index) {
      setShowMoreOptionsIndex(null);
    }
  };

  const handleMoreOptionsClick = (index) => {
    // Toggle more options for the clicked site
    setShowMoreOptionsIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div className="p-4 flex items-center justify-center gap-3">
      <div className="flex items-center justify-between ">
        {!showAddForm && (
          <button
            onClick={handleAddClick}
            className="flex items-center text-[15px] bg-[rgba(1,4,4,0.49)] px-3 py-3 font-medium rounded-3xl text-white hover:underline"
          >
            <AddIcon />
          </button>
        )}
      </div>
      {showAddForm && (
        <div className="mb-4">
          <div className="flex flex-colx-1 w-[350px]">
            <input
              type="text"
              placeholder="Name"
              className="border rounded px-2 py-1 mr-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="URL"
              className="border rounded px-2 py-1 mr-2"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className=" mt-5 ml-36">
            <button
              onClick={handleAddSite}
              className="bg-blue-500 rounded-2xl text-white px-4 py-3  mr-2"
            >
              Add
            </button>
            <button
              onClick={() => setShowAddForm(false)}
              className=" bg-black text-white px-4 py-3 rounded-3"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <div className=" mt-[30px] grid grid-cols-3">
        {sites.map((site, index) => (
          <div
            key={index}
            className="flex items-center text-[15px] flex-col hover:bg-slate-400  w-[80px] h-20 font-medium text-white hover:underline relative"
          >
            <div className=" w-full text-end">
              <button onClick={() => handleMoreOptionsClick(index)}>
                <MoreVertIcon />
              </button>
              {showMoreOptionsIndex === index && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-500 border rounded">
                  <button
                    onClick={() => handleDeleteSite(index)}
                    className="block w-full py-2 text-left px-4 hover:bg-gray-500"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            <div className="w-12 h-12 bg-[rgba(1,4,4,0.49)] rounded-3xl flex items-center justify-center">
              <img
                src={`https://www.google.com/s2/favicons?domain=${site.url}`}
                alt="logo"
                className="w-10 h-10"
              />
            </div>
            <a href={site.url} className="text-black">
              {site.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Googles;
