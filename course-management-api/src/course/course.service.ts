import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses(): string {
        return 'get all course from the service';
    }

  getCourseById(id: string): string {
        return `get course with id :${id} - from service`;
    }

  createCourse(): string {
        return "crete course - from service";
    }

  updateCourse(id: string): string {
        return `update course ${id} - from service`;
    }

  patchCourse(id: string): string {
        return `patch course ${id} - from service`;
    }

  deleteCourse(id: string): string {
        return `delete course ${id} -from service`;
    }
}
