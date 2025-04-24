import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import AddIcon from "../../assets/images/AddIcon.png";
// Update to your path

interface FileUploadProps {
  onFileUpload: (url: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "TaxQue"); // Replace
    formData.append("cloud_name", "drdxdfvpp"); // Replace

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/drdxdfvpp/raw/upload`,
        formData
      );

      const url: string = response.data.secure_url;
      setUploadedUrl(url);
      setLoading(false);
      onFileUpload(url); // Send file URL to parent
    } catch (error) {
      console.error("Upload error:", error);
      setLoading(false);
    }
  };

  const renderFilePreview = () => {
    if (!selectedFile) return null;

    const isImage = selectedFile.type.startsWith("image/");

    if (isImage) {
      return (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt="Preview"
          className="CEImgUploadIcon"
        />
      );
    }

    return <div className="CEImgUploadIcon">📄 {selectedFile.name}</div>;
  };

  return (
    <div className="file-upload-box">
      <label htmlFor="doc1">
        {loading ? (
          <div className="CEImgUploadIcon">Uploading...</div>
        ) : selectedFile ? (
          renderFilePreview()
        ) : (
          <img src={AddIcon} alt="Upload" className="CEImgUploadIcon" />
        )}
      </label>
      <input
        id="doc1"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileUpload;
