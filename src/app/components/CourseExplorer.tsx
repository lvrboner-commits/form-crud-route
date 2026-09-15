"use client";

import { useState, type ChangeEvent, type ComponentProps } from "react";

import CourseCard from "./CourseCard";
import { Course } from "../types/band";

type CourseExplorerProps = {
    courses: Course[];
};

export default function CourseExplorer({ courses }: CourseExplorerProps) {
    const [keyword, setKeyword] = useState("");//ช่องค้นหา

    function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
        setKeyword(event.target.value);
    }

    const searchText = keyword.trim().toLowerCase();

    //เก็บผลการค้นหาไว้ที่ตัวแปลใหม่
    const visibleCourses = courses.filter(
        (course) =>
            (course.title && course.title.toLowerCase().includes(searchText)) ||
            course.code.includes(searchText)
    );

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold mb-6">Course</h1>

            {/* ช่องค้นหา */}
            <div className="mb-8">
                <input
                    type="search"
                    aria-label="ค้นหารายวิชา"
                    value={keyword}
                    onChange={handleKeywordChange}
                    placeholder="ค้นหาชื่อวิชาหรือรหัสวิชา..."
                    className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                />
            </div>

            {/* ส่วนแสดงรายวิชา... */}

            {visibleCourses.length === 0 ? (
                <p className="text-gray-500">ไม่พบรายวิชาที่ตรงกับเงื่อนไข</p>
            ) : (
                <section className="space-y-4">
                    {visibleCourses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course as unknown as ComponentProps<typeof CourseCard>["course"]}
                        />
                    ))}
                </section>
            )}
        </div>
    );
}