import React, { useState, ChangeEvent } from 'react';

interface Course {
  id: number;
  name: string;
  description: string;
  instructor: string;
  instrument: string;
  dayOfWeek: string;
  students: number;
  price: string;
  status: string;
}

const CourseTable: React.FC = () => {
  const sampleData: Course[] = [
    {
      id: 1,
      name: 'Guitar Basics',
      description: 'Learn the basics of playing the guitar.',
      instructor: 'John Doe',
      instrument: 'Guitar',
      dayOfWeek: 'Mondays',
      students: 15,
      price: '$100',
      status: 'Open',
    },
    {
      id: 2,
      name: 'Piano Fundamentals',
      description: 'Introductory piano lessons for beginners.',
      instructor: 'Jane Smith',
      instrument: 'Piano',
      dayOfWeek: 'Wednesdays',
      students: 12,
      price: '$120',
      status: 'Closed',
    },
    {
        id: 3,
        name: 'Flute Fundamentals',
        description: 'Introductory piano lessons for beginners.',
        instructor: 'Jane Smith',
        instrument: 'Piano',
        dayOfWeek: 'Wednesdays',
        students: 12,
        price: '$120',
        status: 'Closed',
      },
      {
        id: 4,
        name: 'Violin Fundamentals',
        description: 'Introductory piano lessons for beginners.',
        instructor: 'Jane Smith',
        instrument: 'Piano',
        dayOfWeek: 'Wednesdays',
        students: 12,
        price: '$120',
        status: 'Closed',
      },
  ];

  const [courses, setCourses] = useState<Course[]>(sampleData);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
  <div className="flex justify-between items-center">
  <h2 className="text-xl font-semibold mb-4">Course Table</h2>
  <div className="relative">
    <input
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={handleSearchInputChange}
      className="border p-2"
    />
    <div className="absolute top-0 right-0 h-full flex items-center pr-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-7.293-.293.293a1 1 0 01-1.414-1.414l.293-.293a7 7 0 111.414 1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>

<table className="mt-4">
        <thead>
          <tr className="bg-gray-400">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Instructor</th>
            <th className="px-4 py-2">Instrument</th>
            <th className="px-4 py-2">Day of Week</th>
            <th className="px-4 py-2">No. of Students</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course) => (
            <tr key={course.id} className="border-t">
              <td className="px-4 py-2">{course.name}</td>
              <td className="px-4 py-2">{course.description}</td>
              <td className="px-4 py-2">{course.instructor}</td>
              <td className="px-4 py-2">{course.instrument}</td>
              <td className="px-4 py-2">{course.dayOfWeek}</td>
              <td className="px-4 py-2">{course.students}</td>
              <td className="px-4 py-2">{course.price}</td>
              <td className="px-4 py-2">{course.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
