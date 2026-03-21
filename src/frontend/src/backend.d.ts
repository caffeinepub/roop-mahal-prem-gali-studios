import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Project {
    title: string;
    thumbnailUrl: string;
    description: string;
    videoUrl: string;
}
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export interface backendInterface {
    addProject(title: string, description: string, videoUrl: string, thumbnailUrl: string): Promise<void>;
    deleteProject(title: string): Promise<void>;
    getAllContacts(): Promise<Array<ContactSubmission>>;
    getAllProjects(): Promise<Array<Project>>;
    getProject(title: string): Promise<Project>;
    submitContact(name: string, email: string, message: string): Promise<void>;
    updateProject(title: string, description: string, videoUrl: string, thumbnailUrl: string): Promise<void>;
}
