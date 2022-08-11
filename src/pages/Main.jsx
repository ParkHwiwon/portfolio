import React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Button } from '../components';
import { announcements, dropdownData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import AA from '../data/AA.jpg';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Main = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex m-4 flex-wrap justify-around">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">announcements</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="mt-10 w-80 md:w-400">
            {announcements.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <div>
                    <p className="text-md font-semibold cursor-pointer">{item.title}</p>
                    <p className="text-sm text-gray-400 cursor-pointer">{item.writer}</p>
                  </div>
                </div>
                <p className='text-sm'>{item.date}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button color="white" bgColor={currentColor} text="More" borderRadius="10px" />
            </div>
            <p className="text-gray-400 text-sm">12 announcements</p>
          </div>
        </div>
        <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">advertisement</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
            </button>
          </div>
          <div className="mt-10">
            <img
              className="md:w-96 h-50 "
              src={AA}
            />
            <div className="mt-8">
              <p className="font-semibold text-lg">Hello World!</p>
              <p className="mt-8 text-sm text-gray-400">
              React practice
              </p>
              <div className="mt-5 border-t-1 border-color">
                <div className="mt-3">
                  <Button color="white" bgColor={currentColor} text="More" borderRadius="10px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
