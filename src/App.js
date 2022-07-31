import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import './App.css';

const App = () => {
    const activeMenu = false;
    return (
        <div>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                        <TooltipComponent content='설정' position='Top'>
                            <button type='button' className='text-3xl p-3 hover:bg-light-gray text-white hover:text-black' style={{ background: 'gray', borderRadius: '50%' }}>
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className='w-72 fixed sidebar
                        dark:bg=secondary-dark-bg
                        bg-white'>
                            sidebar
                        </div>
                    ) : (
                        <div className='w-0
                        dark-bg-secondary-dark-bg'>
                            sidebar
                        </div>
                    )}
                    <div className={
                        `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                    }>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            Navbar
                        </div>
                    </div>

                    <Routes>
                        {/* 대시보드 */}
                        <Route path='/' element='Econnerce' />
                        <Route path='/econnerce' element='Econnerce' />
                        {/* 페이지 */}
                        <Route path='/orders' element='Orders' />
                        <Route path='/employees' element='Employees' />
                        <Route path='/customers' element='Customers' />
                        {/* 앱 */}
                        <Route path='/kanban' element='Kanban' />
                        <Route path='/editor' element='Editor' />
                        <Route path='/calender' element='Calender' />
                        <Route path='/color-picker' element='Color-picker' />
                        {/* 차트 */}
                        <Route path='/line' element='Line' />
                        <Route path='/area' element='Area' />
                        <Route path='/bar' element='Bar' />
                        <Route path='/pie' element='Pie' />
                        <Route path='/finencial' element='Finencial' />
                        <Route path='/color-mapping' element='Color-mapping' />
                        <Route path='/pyramid' element='pyramid' />
                        <Route path='/stacked' element='Stacked' />
                    </Routes>
                </div>
            </BrowserRouter >
        </div >
    )
}

export default App