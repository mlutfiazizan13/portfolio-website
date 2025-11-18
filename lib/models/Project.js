import mongoose from 'mongoose';

// 1. Technology Sub-Schema
const TechnologySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String }
}, { _id: false });


// 2. Content Blocks Schema (Dynamic)
const ContentBlockSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["text", "image", "list", "code", "gallery", "heading"]
  },

  // Common fields
  value: { type: String },          // text, code, heading
  style: { type: String },          // text style
  level: { type: Number },          // heading level

  // Image block
  src: { type: String },
  caption: { type: String },

  // List block
  ordered: { type: Boolean },
  items: [{ type: String }],

  // Code block
  language: { type: String },

  // Gallery block
  images: [{ type: String }]
}, { _id: false });


// 3. Main Project Schema
const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },

  slug: { type: String, required: true, unique: true, lowercase: true },

  teaserDesc: { type: String, required: true },
  desc: { type: String }, // optional now, since rich-content exists

  coverImage: { type: String, required: true },

  date: { type: Date, required: true },
  type: { type: String, required: true },
  client: { type: String, required: true },

  repositoryLink: { type: String, required: true },

  // Dynamic blocks for rendering project content
  content: [ContentBlockSchema],

  // Technology array
  technology: [TechnologySchema],

}, { timestamps: true });


// Handle Next.js hot reload issues
const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
export default Project;
