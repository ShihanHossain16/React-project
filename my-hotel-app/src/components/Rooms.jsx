

import React from "react";

function Rooms() {
  return (
    <div className="ml-4 mr-4">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-8">
        <div class="lg:col-span-3">
          <div class="relative bg-white shadow-lg rounded-lg overflow-hidden h-96">
            <img
              src="Rectangle 1.png"
              className="w-full h-full object-cover"
            />

          
            <div class="absolute top-2 right-2 bg-white text-orange-500 text-sm p-3 rounded-full">
              $62.00/Day
            </div>
            <div class="absolute bottom-4 left-4 text-white font-urbanist">
              <h3 class="text-xl font-semibold">Deluxe Double Room</h3>
              <div class="flex space-x-4 text-sm mt-1">
                <p>500 Sqft</p>
                <p>1-4 guests</p>
                <p>Free Wi-Fi</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="lg:col-span-2">
          <div class="relative bg-white shadow-lg rounded-lg overflow-hidden h-96">
            <img
              src="Rectangle 2.png"
              className="w-full h-full object-cover"
            />
       
            <div class="absolute top-2 right-2 bg-white text-orange-400 text-sm p-3 rounded-full">
              $62.00/Day
            </div>
            <div class="absolute bottom-4 left-4 text-white font-urbanist">
              <h3 class="text-xl font-semibold">Deluxe Double Room</h3>
              <div class="flex space-x-4 text-sm mt-1">
                <p>500 Sqft</p>
                <p>1-4 guests</p>
                <p>Free Wi-Fi</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
 
  <div class="relative bg-white shadow-lg rounded-lg overflow-hidden h-96">
  
    <img
              src="Rectangle 3.png"
              className="w-full h-full object-cover"
            />
    <div class="absolute top-2 right-2 bg-white text-orange-500 text-sm p-3 rounded-full">$62.00/Day</div>
    <div class="absolute bottom-4 left-4 text-white font-urbanist">
      <h3 class="text-xl font-semibold">Hill View Suite</h3>
      <div class="flex space-x-4 text-sm mt-1">
        <p>500 Sqft</p>
        <p>1-4 guests</p>
        <p>Free Wi-Fi</p>
      </div>
    </div>
  </div>
  
  
  <div class="relative bg-white shadow-lg rounded-lg overflow-hidden h-96">
   
    <img
              src="Rectangle 4.png"
              className="w-full h-full object-cover"
            />
    <div class="absolute top-2 right-2 bg-white text-orange-500 text-sm p-3 rounded-full">$62.00/Day</div>
    <div class="absolute bottom-4 left-4 text-white font-urbanist">
      <h3 class="text-xl font-semibold">Hill View Suite</h3>
      <div class="flex space-x-4 text-sm mt-1">
        <p>500 Sqft</p>
        <p>1-4 guests</p>
        <p>Free Wi-Fi</p>
      </div>
    </div>
  </div>
  

  <div class="relative bg-white shadow-lg rounded-lg overflow-hidden h-96">
            <img
              src="Rectangle 5.png"
              className="w-full h-full object-cover"
            />
    
    <div class="absolute top-2 right-2 bg-white text-orange-500 text-sm p-3 rounded-full">$62.00/Day</div>
    <div class="absolute bottom-4 left-4 text-white font-urbanist">
      <h3 class="text-xl font-semibold">Hill View Suite</h3>
      <div class="flex space-x-4 text-sm mt-1">
        <p>500 Sqft</p>
        <p>1-4 guests</p>
        <p>Free Wi-Fi</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Rooms;
