import React from "react";
import "./new.css";
const New = () => {
  return (
    <div>
      <nav>
        <div id="avatar">
          <img src="IMG_5256.jpg" alt="" />
          <p>Username</p>
        </div>
        <a href="google.com">Switch to Artiste Mode</a>
      </nav>

      <form className="flex flex-col pt-3 md:pt-8">
        <div className="flex flex-col pt-4">
          <label
            htmlFor="song-name"
            className="text-2xl mb-2 text-gray-500 dark:text-gray-400"
          >
            Song Search
          </label>
          <input
            autoFocus
            required
            type="text"
            name="song-name"
            placeholder="Enter Song Title"
            className="shadow font-mono   h-12 appearance-none border rounded-md w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:border-b-4 focus:border-gray-900 focus:outline-none focus:shadow-outline"
          />

          <button
            type="submit"
            className="w-20 m-auto bg-green-500 cursor rounded-md text-white font-bold text-sm hover:bg-green-900 p-2 mt-8"
          >
            Search
          </button>
        </div>
      </form>

      <div id="artistestofollow" className="mt-3">
        <h1 className="text-2xl mb-2 mt-5 text-gray-500 dark:text-gray-400">Artistes to follow</h1>
        <div id="artistes">

        <div id="drake">
          <img src="IMG_5298.jpg" alt="" />
          <p>Drake</p>

          <button className="w-full px-4 py-2 mt-1 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Follow
          </button>
        </div>

        <div id="drake">
          <img src="IMG_5298.jpg" alt="" />
          <p>Drake</p>

          <button className="w-full px-4 py-2 mt-1 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Follow
          </button>
        </div>

        <div id="drake">
          <img src="IMG_5298.jpg" alt="" />
          <p>Drake</p>

          <button className="w-full px-4 py-2 mt-1 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Follow
          </button>
        </div>

        <div id="drake">
          <img src="IMG_5298.jpg" alt="" />
          <p>Drake</p>

          <button className="w-full px-4 py-2 mt-1 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Follow
          </button>
        </div>

        <div id="drake">
          <img src="IMG_5298.jpg" alt="" />
          <p>Drake</p>
          <button className="w-full px-4 py-2 mt-1 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Follow
          </button>
        </div>
        </div>
      </div>


      <div id="player" className="m-auto">
      <h1 className="text-2xl mb-2 mt-5 text-gray-500 dark:text-gray-400">Recommended Songs</h1>
      <div id="allsongs">

      <div id="song">
        <img src="IMG_5298.jpg" alt="" />
        <p>Drake - Hotline Bling</p>
        <div id="controls">

        </div>
      </div>

      <div id="song">
        <img src="IMG_5299.jpg" alt="" />
        <p>Adele - Hello</p>
        <div id="controls">

        </div>
      </div>
      <div id="song">
        <img src="IMG_5242.jpg" alt="" />
        <p>Kwesi Arthur - Drama</p>
        <div id="controls">

        </div>
      </div>

      <div id="song">
        <img src="IMG_5300.jpg" alt="" />
        <p>Ed Sheeran - Perfect</p>
        <div id="controls">

        </div>
      </div>
      </div>

      </div>
     
    </div>
  );
};

export default New;
