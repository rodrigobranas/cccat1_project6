import RepositoryAbstractFactory from "../../domain/factory/RepositoryAbstractFactory";
import EnrollStudentInputData from "../../domain/usecase/data/EnrollStudentInputData";
import EnrollStudentOutputData from "../../domain/usecase/data/EnrollStudentOutputData";
import GetEnrollmentOutputData from "../../domain/usecase/data/GetEnrollmentOutputData";
import EnrollStudent from "../../domain/usecase/EnrollStudent";
import GetEnrollment from "../../domain/usecase/GetEnrollment";

export default class EnrollmentController {
    repositoryFactory: RepositoryAbstractFactory;

    constructor (repositoryFactory: RepositoryAbstractFactory) {
        this.repositoryFactory = repositoryFactory;
    }

    async enrollStudent (body: any): Promise<EnrollStudentOutputData> {
        const enrollStudent = new EnrollStudent(this.repositoryFactory);
        const enrollStudentInputData = new EnrollStudentInputData(body);
        const enrollStudentOutputData = await enrollStudent.execute(enrollStudentInputData);
        return enrollStudentOutputData;
    }

    async getEnrollment (code: string, currentDate: Date = new Date()): Promise<GetEnrollmentOutputData> {
        const getEnrollment = new GetEnrollment(this.repositoryFactory);
        const getEnrollmentOutputData = await getEnrollment.execute(code, currentDate);
        return getEnrollmentOutputData;
    }
}