"use client";

import { useState, type ChangeEvent } from "react";
import { Course } from "../types/band";
import CourseForm, { CourseDraft } from "./CourseForm";
import CourseCard from "./CourseCard";


type CourseExplorerProps = {
  initialCourses: Course[];
};

type NormalizedCourse = Course & {
  status: "open" | "closed";
};

function normalizeCourseStatus(status?: string): "open" | "closed" {
  return status === "closed" ? "closed" : "open";
}

export default function CourseExplorer({ initialCourses }: CourseExplorerProps) {
  const [courses, setCourses] = useState<NormalizedCourse[]>(() =>
    initialCourses.map(
      (course): NormalizedCourse => ({
        ...course,
        status: normalizeCourseStatus(course.status),
      })
    )
  );
  const [keyword, setKeyword] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  function handleKeywordChange(event: ChangeEvent<HTMLInputElement>) {
    setKeyword(event.target.value);
  }

  function handleCreate(draft: CourseDraft) {
    const newCourse: NormalizedCourse = {
      id: crypto.randomUUID(),
      code: draft.code.trim(),
      name: draft.name.trim(),
      instructors: [
        {
          id: crypto.randomUUID(),
          name: draft.instructor.trim(),
          role: "",
          image: "",
        },
      ],
      credits: Number(draft.credit),
      status: "open",
      title: "",
      description: "",
      category: "",
      level: "",
      duration: "",
      image: "",
    };
    setCourses((currentCourses) => [...currentCourses, newCourse]);
  }

  function handleDelete(id: string) {
    setCourses((currentCourses) => currentCourses.filter((course) => course.id !== id));
  }

  function handleUpdate(id: string, draft: CourseDraft) {
    setCourses((currentCourses) =>
      currentCourses.map((course) =>
        course.id === id
          ? {
              ...course,
              code: draft.code.trim(),
              name: draft.name.trim(),
              credits: Number(draft.credit),
              instructors: [{
                id: course.instructors[0]?.id ?? crypto.randomUUID(),
                name: draft.instructor.trim(),
                role: course.instructors[0]?.role ?? "",
                image: course.instructors[0]?.image ?? "",
              }],
              status: course.status ?? "active",
            }
          : course
      )
    );
    setEditingId(null);
  }

  function handleSave(draft: CourseDraft) {
    if (editingId === null) {
      handleCreate(draft);
      return;
    }
    handleUpdate(editingId, draft);
  }

  const editingCourse = courses.find((course) => course.id === editingId);
  const formInitialCourse = editingCourse
    ? {
        id: editingCourse.id,
        code: editingCourse.code,
        name: editingCourse.name,
        instructor: editingCourse.instructors[0]?.name ?? "",
        credit: editingCourse.credits,
      }
    : undefined;

  const searchText = keyword.trim().toLowerCase();
  const visibleCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchText) ||
      course.code.toLowerCase().includes(searchText)
  );

  return (
    <div className="space-y-6">
      <input
        type="search"
        aria-label="ค้นหารายวิชา"
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="ค้นหารายวิชา..."
        className="p-2 w-full rounded"
      />

      <CourseForm
        key={editingId ?? "new"}
        initialCourse={formInitialCourse}
        onSave={handleSave}
        onCancel={() => setEditingId(null)}
      />

      <div className="space-y-4">
        {visibleCourses.length === 0 ? (
          <p className="text-gray-500">ไม่พบรายวิชาที่ตรงกับคำค้น</p>
        ) : (
          visibleCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))
        )}
      </div>
    </div>
  );
}