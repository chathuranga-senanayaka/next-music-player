import { Clock, Heart } from "lucide-react";
import React from "react";
import img1 from "../../../../public/fav.jpg";
import Image from "next/image";

const SongsList = () => {
  const songs = [
    {
      id: 1,
      artist: "The Beatles",
      title: "Hey Jude",
      time: "7:11",
    },
    {
      id: 2,
      artist: "Queen",
      title: "Bohemian Rhapsody",
      time: "5:55",
    },
    {
      id: 3,
      artist: "Michael Jackson",
      title: "Billie Jean",
      time: "4:54",
    },
    {
      id: 4,
      artist: "Led Zeppelin",
      title: "Stairway to Heaven",
      time: "8:02",
    },
    {
      id: 5,
      artist: "Pink Floyd",
      title: "Comfortably Numb",
      time: "6:53",
    },
  ];
  return (
    <div className="w-[96%] mx-auto px-6">
      <h2 className="text-3xl text-black mt-8 font-bold mb-6">
        Songs Collection
      </h2>
      <ul className="space-y-4">
        {songs.map((song) => (
          <li
            key={song.id}
            className="flex justify-between items-center p-3 hover:bg-[#2a2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center gap-5">
              <Image
                src={img1}
                alt="img1"
                width={64}
                height={64}
                className="bg-gray-700 rounded-md flex-shrink-0"
              />

              <div>
                <p className="text-black font-medium">{song.artist}</p>
                <p className="text-gray-400 font-sm">{song.title}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{song.time}</span>
              </div>
              <Heart size={16} className="cursor-pointer hover:text-red-500" />
              <button className="text-lg font-bold">⁝</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongsList;
