import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  serviceId: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true },
  tagline: String,
  description: String,
  features: [String],
  icon: String,
  stats: String,
  color: String
}, { timestamps: true });

export default mongoose.model('Service', serviceSchema);
