export default interface ApiResponse <T = any> {
    data: T;
    status: string;
}
