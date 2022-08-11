import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';
import { BsKanban } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';



export const kanbanGrid = [
  {
    headerText: 'ToDo',
    keyField: 'ToDo',
    allowToggle: true
  },

  {
    headerText: 'Proceeding',
    keyField: 'Proceeding',
    allowToggle: true
  },
  {
    headerText: 'Done',
    keyField: 'Done',
    allowToggle: true
  },
];

export const kanbanData = [
  {
    Id: '1',
    Status: 'ToDo',
    Summary: 'Analyze the new requirements gathered from the customer.',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: '2',
    Status: 'Proceeding',
    Summary: 'Improve application performance',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: '3',
    Status: 'ToDo',
    Summary: 'Arrange a web meeting with the customer to get new requirements.',
    ClassName: 'e-others, e-critical, e-janet-leverling',
  },
  {
    Id: '4',
    Status: 'Done',
    Summary: 'Fix the issues reported in the IE browser.',
    ClassName: 'e-bug, e-release, e-janet-leverling',
  },
  {
    Id: '5',
    Status: 'Done',
    Summary: 'Fix the issues reported by the customer.',
    ClassName: 'e-bug, e-low, e-steven-walker',
  },
]


// customers
const customerGridName = (props) => (
  <div className="flex justify-center mr-3">
    <div>
      <p>{props.Company}</p>
    </div>
  </div>
);

const customerGridEmail = (props) => (
  <div className="flex gap-4 justify-center">
    <div>
      <p>{props.Email}</p>
    </div>
  </div>
);

const customerGridDate = (props) => (
  <div className="flex gap-4 justify-center mr-2">
    <div>
      <p>{props.EndDate}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);

const customerGridNumber = (props) => (
  <div className="flex gap-4 justify-center mr-2">
    <div>
      <p>{props.CompanyPhone}</p>
    </div>
  </div>
);


export const customersGrid = [
  { type: 'checkbox', width: '50' },
  {
    headerText: 'Company',
    field: 'Company',
    width: '120',
    template: customerGridName,
    textAlign: 'Center'
  },
  {
    field: 'Email',
    headerText: 'Email',
    width: '170',
    textAlign: 'Center',
    template: customerGridEmail,
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus
  },
  {
    field: 'EndDate',
    headerText: 'EndDate',
    width: '150',
    textAlign: 'Center',
    template: customerGridDate,
  },
  {
    field: 'CompanyPhone',
    headerText: 'CompanyPhone',
    width: '150',
    textAlign: 'Center',
    template: customerGridNumber,
  },
];

export const customersData = [
  {
    Company: '네이버',
    Email: '123@gmail.com',
    Status: 'contract',
    StatusBg: '#8BE78B',
    EndDate: '2021-01-01',
    CompanyPhone: '010-1234-5678',
    Location: 'India',
  },
  {
    Company: '카카오',
    Email: '456@gmail.com',
    Status: 'contract',
    StatusBg: '#8BE78B',
    EndDate: '2021-01-02',
    CompanyPhone: '010-1234-5678',
    Location: 'India',
  },
  {
    Company: '배민',
    Email: '789@gmail.com',
    Status: 'termination',
    StatusBg: 'red',
    EndDate: '2021-01-03',
    CompanyPhone: '010-1234-5678',
    Location: 'USA',
  },
  {
    Company: '라인',
    Email: '101112@gmail.com',
    Status: 'contract',
    StatusBg: '#8BE78B',
    EndDate: '2021-01-04',
    CompanyPhone: '010-1234-5678',
    Location: 'USA',
  },
  {
    Company: '쿠팡',
    Email: '131415@gmail.com',
    Status: 'termination',
    StatusBg: 'red',
    EndDate: '2021-01-05',
    CompanyPhone: '010-1234-5678',
    Location: 'USA',
  },
]

// Employees
const gridEmployeeID = (props) => (
  <div className="flex items-center justify-center mr-4">
    <p>{props.EmployeeID}</p>
  </div>
);
const gridEmployeeName = (props) => (
  <div className="flex items-center justify-center mr-4">
    <span>{props.Name}</span>
  </div>
);
const gridEmployeeRank = (props) => (
  <div className="flex items-center justify-center mr-4">
    <span>{props.Rank}</span>
  </div>
);
const gridEmployeeDepartment = (props) => (
  <div className="flex items-center justify-center mr-4">
    <span>{props.Department}</span>
  </div>
);
const gridEmployeeStartDate = (props) => (
  <div className="flex items-center justify-center mr-4">
    <span>{props.startDate}</span>
  </div>
);
const gridEmployeeResignationDay = (props) => (
  <div className="flex items-center justify-center mr-4">
    <span>{props.resignationDay}</span>
  </div>
);


export const employeesGrid = [
  { type: 'checkbox', width: '50' },
  {
    field: 'EmployeeID',
    headerText: 'Employee ID',
    width: '125',
    textAlign: 'Center',
    template: gridEmployeeID
  },
  {
    headerText: 'Name',
    field: 'Name',
    width: '125',
    textAlign: 'Center',
    template: gridEmployeeName,
  },
  {
    field: 'Rank',
    headerText: 'Rank',
    width: '125',
    textAlign: 'Center',
    template: gridEmployeeRank,
  },
  {
    headerText: 'Department',
    field: 'Department',
    width: '150',
    textAlign: 'Center',
    template: gridEmployeeDepartment,
  },
  {
    field: 'StartDate',
    headerText: 'StartDate',
    width: '135',
    textAlign: 'Center',
    template: gridEmployeeStartDate,
  },
  {
    field: 'ResignationDay',
    headerText: 'ResignationDay',
    width: '135',
    textAlign: 'Center',
    template: gridEmployeeResignationDay,
  },
];


export const employeesData = [
  {
    EmployeeID: 1,
    Name: '가',
    Rank: 'CEO',
    Department: '',
    startDate: '2021-01-01',
    resignationDay: '2022-01-05',
  },
  {
    EmployeeID: 2,
    Name: '나',
    Rank: 'CTO',
    Department: '',
    startDate: '2021-01-02',
    resignationDay: '2022-01-04',
  },
  {
    EmployeeID: 3,
    Name: '다',
    Rank: 'Director',
    Department: 'Sales',
    startDate: '2021-01-03',
    resignationDay: '2022-01-03',
  },
  {
    EmployeeID: 4,
    Name: '라',
    Rank: 'Assistant',
    Department: 'Marketring',
    startDate: '2021-01-04',
    resignationDay: '2022-01-02',
  },
  {
    EmployeeID: 5,
    Name: '마',
    Rank: 'Intern',
    Department: 'Purchasing',
    startDate: '2021-01-05',
    resignationDay: '2022-01-01',
  },
  {
    EmployeeID: 1,
    Name: '가',
    Rank: 'CEO',
    Department: '',
    startDate: '2021-01-01',
    resignationDay: '2022-01-05',
  },
  {
    EmployeeID: 2,
    Name: '나',
    Rank: 'CTO',
    Department: '',
    startDate: '2021-01-02',
    resignationDay: '2022-01-04',
  },
  {
    EmployeeID: 3,
    Name: '다',
    Rank: 'Director',
    Department: 'Sales',
    startDate: '2021-01-03',
    resignationDay: '2022-01-03',
  },
  {
    EmployeeID: 4,
    Name: '라',
    Rank: 'Assistant',
    Department: 'Marketring',
    startDate: '2021-01-04',
    resignationDay: '2022-01-02',
  },
  {
    EmployeeID: 5,
    Name: '마',
    Rank: 'Intern',
    Department: 'Purchasing',
    startDate: '2021-01-05',
    resignationDay: '2022-01-01',
  },
  {
    EmployeeID: 1,
    Name: '가',
    Rank: 'CEO',
    Department: '',
    startDate: '2021-01-01',
    resignationDay: '2022-01-05',
  },
  {
    EmployeeID: 2,
    Name: '나',
    Rank: 'CTO',
    Department: '',
    startDate: '2021-01-02',
    resignationDay: '2022-01-04',
  },
  {
    EmployeeID: 3,
    Name: '다',
    Rank: 'Director',
    Department: 'Sales',
    startDate: '2021-01-03',
    resignationDay: '2022-01-03',
  },
  {
    EmployeeID: 4,
    Name: '라',
    Rank: 'Assistant',
    Department: 'Marketring',
    startDate: '2021-01-04',
    resignationDay: '2022-01-02',
  },
  {
    EmployeeID: 5,
    Name: '마',
    Rank: 'Intern',
    Department: 'Purchasing',
    startDate: '2021-01-05',
    resignationDay: '2022-01-01',
  },
];


export const links = [
  {
    Rank: 'page',
    links: [
      {
        name: 'main',
        icon: <FiHome />,
      },
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
      {
        name: 'customers',
        icon: <RiContactsLine />,
      },
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
    ],
  },
];

// 알림
export const notificationData = [
  {
    message: 'notification 1',
    desc: 'notification 1',
  },
  {
    message: 'notification 2',
    desc: 'notification 2',
  },
  {
    message: 'notification 3',
    desc: 'notification 3',
  },
  {
    message: 'notification 4',
    desc: 'notification 4',
  },
];

//  공지사항
export const announcements = [
  {
    title: '2022년 국민연금보험 상/하안액 변경',
    date: '2022-08-12',
    writer: '관리자',
  },
  {
    title: '알려드립니다',
    date: '2022-08-13',
    writer: '관리자',
  },
  {
    title: '사업장 검색 관련 안내',
    date: '2022-08-14',
    writer: '관리자',
  },
  {
    title: '전화 상담 안내',
    date: '2022-08-15',
    writer: '관리자',
  },
  {
    title: '메일 수신 관련 안내',
    date: '2022-08-16',
    writer: '관리자',
  },
  {
    title: '비대면 관련 안내',
    date: '2022-08-17',
    writer: '관리자',
  },
  {
    title: '메일 수신 관련 안내',
    date: '2022-08-18',
    writer: '관리자',
  },
];


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    title: 'Account Settings',
  },
  {
    title: 'Notification settings',
  },
];



export const scheduleData = [
  {
    Id: 1,
    Subject: 'schedule1',
    StartTime: '2022-08-12T04:00:00.000Z',
    EndTime: '2022-08-12T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'schedule2',
    StartTime: '2022-08-12T06:30:00.000Z',
    EndTime: '2022-08-12T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'schedule3',
    StartTime: '2022-08-12T04:00:00.000Z',
    EndTime: '2022-08-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'schedule4',
    StartTime: '2022-08-12T07:30:00.000Z',
    EndTime: '2022-08-12T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'schedule5',
    StartTime: '2022-08-12T06:30:00.000Z',
    EndTime: '2022-08-12T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
];

export const dropdownData = [
  {
    Id: '1',
    Time: '2022-07',
  },
  {
    Id: '2',
    Time: '2022-08',
  }, {
    Id: '3',
    Time: '2022-09',
  },
];


