export interface IFile {
  id: string;
  originalName: string;
  path: string;
  extension: string;
  uploadedBy: {
    _id: string;
    name: string;
  };
}
