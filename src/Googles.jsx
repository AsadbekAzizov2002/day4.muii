// import React, { useState } from "react";
// import { Avatar, Fab, Link, TextField, Button, Divider } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import MicNoneIcon from "@mui/icons-material/MicNone";
// import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import EditIcon from "@mui/icons-material/Edit";
// import AddIcon from "@mui/icons-material/Add";



// const Hero = () => {
//   const [showAddSite, setShowAddSite] = useState(false);
//   const [newSite, setNewSite] = useState({ name: "", url: "" });
//   const [sites, setSites] = useState([]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewSite({ ...newSite, [name]: value });
//   };

//   const handleAddSite = () => {
//     setSites([...sites, newSite]);
//     setShowAddSite(false);
//     setNewSite({ name: "", url: "" });
//   };

//   const handleDeleteSite = () => {
//     setShowAddSite(false);
//   };

//   return (
//     <div>
//       <main>
//         <div className=" container ">
//           <h1 className=" mt-[100px] justify-center mx-[35%] text-white font-semibold items-center text-8xl w-[550px]">
//             Google
//           </h1>
//           <div className=" flex items-center bg-white rounded-2xl  w-[650px] ml-[350px] mt-9 ">
//             <Link>
//               <SearchIcon />
//             </Link>
//             <TextField fullWidth label="Search Google or type a URL" id="" />
//             <div className=" flex gap-3 mr-1">
//               <Link 
//                 underline="hover"
//                 color="text.white"
//                 href="https://labs.google.com/search/error?source=ntp&authuser=0&is=i"
//                 aria-current="page"
//               >
//                 <MicNoneIcon />
//               </Link>
//               <Link>
//                 <CameraAltOutlinedIcon />
//               </Link>
//             </div>
//           </div>
//           <div className=" mt-[25px] w-[465px] justify-center mx-auto grid grid-cols-4  gap-14 ml-[430px]">
//             {sites.map((site, index) => (
//               <div
//                 key={index}
//                 className=" w-[112px] h-[112px] hover:bg-blue-300 rounded"
//               >
//                 <Link
//                   underline="hover"
//                   color="text.white"
//                   href={site.url}
//                   aria-current="page"
//                 >
//                   <div>
//                     <div className=" ml-[90px] w-[2px]">
//                       <MoreVertIcon fontSize="small" />
//                     </div>
//                     <div className=" justify-center mx-auto h-[60px] w-[60px]">
//                       <img
//                         className=" justify-center bg-inherit h-[45px] w-[155px] "
//                         src={`https://www.google.com/s2/favicons?domain=${site.url}`}
//                         alt=""
//                       />
//                     </div>
//                     <h2>{site.name}</h2>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//             {showAddSite ? (
//               <div className="col-span-4" style={{ backgroundColor: "white" }}>
//                 <TextField
//                   name="name"
//                   label="Site Name"
//                   value={newSite.name}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <TextField
//                   name="url"
//                   label="Site URL"
//                   value={newSite.url}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//                 <Button onClick={handleAddSite}>Add</Button>
//                 <Button onClick={handleDeleteSite}>Cancel</Button>
//               </div>
//             ) : (
//               <div
//                 className=" w-[112px] h-[112px] hover:bg-blue-300 rounded"
//                 onClick={() => setShowAddSite(true)}
//               >
//                 <Fab color="black" aria-label="edit">
//                   <AddIcon />
//                 </Fab>
//                 <h2>Add Shortcut</h2>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//       <div className=" ml-[1450px] mt-[130px] rounded-2xl w-7 h-7 bg-white">
//         <EditIcon />
//       </div>
//     </div>
//   );
// };

// export default Hero;























import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
const Googles = () => {
  const [sites, setSites] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
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

  const handleDeleteSite = () => {
    setShowAddForm(false);
  };

  return (
    <div className="p-4 flex items-center justify-center gap-3">
      <div className="flex items-center justify-between ">
        {!showAddForm && (
          <button
            onClick={handleAddClick}
            className=" flex items-center text-[15px] bg-[rgba(1,4,4,0.49)] px-3 py-3 font-medium rounded-3xl text-white hover:underline">
            <AddIcon />
          </button>
        )}
      </div>
      {showAddForm && (
        <div className="mb-4">
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
          <button
            onClick={handleAddSite}
            className="bg-green-500 text-white px-4 py-3 rounded mr-2">
            Add
          </button>
          <button
            onClick={handleDeleteSite}
            className="bg-red-500 text-white px-4 py-3 rounded">
            Delete
          </button>
        </div>
      )}
      <div>
        {sites.map((site, index) => (
          <div
            key={index}
            className="flex items-center text-[15px] flex-col hover:bg-slate-400  w-[80px] h-20 font-medium text-white hover:underline">
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