import mongoose from 'mongoose';

// 1. Technology Sub-Schema
const TechnologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // Note: 'image' is optional for Quarkus/Ollama in the JSON example,
    // so we keep 'required: false' or omit it.
  },
}, { _id: false });

// 2. Image Sub-Schema
const ImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, { _id: false });

// 3. Main Project Schema
const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  teaserDesc: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: String, // Storing as string as per the JSON ("YYYY-MM-DD")
    required: true,
    // Alternatively, for better querying: type: Date
  },
  type: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  repositoryLink: {
    type: String,
    required: true,
    // Add validation for URL format if necessary
  },
  technology: [TechnologySchema], // Array of Technology sub-documents
  images: [ImageSchema],         // Array of Image sub-documents
}, { 
  timestamps: true // Optional: Adds 'createdAt' and 'updatedAt' fields
});

// Reuse existing model on hot reload to avoid OverwriteModelError in Next.js
const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

export default Project;
