"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Camera } from "lucide-react";

const HomeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isImageSearchActive, setIsImageSearchActive] = useState(false);

  const handleTextSubmit = (e) => {};
  return (
    <div>
      <form onSubmit={handleTextSubmit}>
        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder="Enter make, model, or use our AI Image Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-12 py-6 w-full rounded-full border-gray-300 bg-white/95 backdrop-blur-sm"
          />

          {/* Image Search Button */}
          <div className="absolute right-[100px]">
            <Camera
              size={35}
              onClick={() => setIsImageSearchActive(!isImageSearchActive)}
              className="cursor-pointer rounded-xl p-1.5"
              style={{
                background: isImageSearchActive ? "black" : "",
                color: isImageSearchActive ? "white" : "",
              }}
            />
          </div>

          <Button type="submit" className="absolute right-2 rounded-full">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HomeSearch;
