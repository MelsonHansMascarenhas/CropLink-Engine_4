import mongoose from 'mongoose';

const schemeSchema = new mongoose.Schema({
  schemeId: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true, trim: true },
  shortName: { type: String, required: true },
  department: { type: String, required: true },
  benefit: { type: String, required: true },
  benefitPeriod: String,
  category: { type: String, required: true, index: true },
  badge: String,
  description: String,
  eligibility: [String],
  documents: [String],
  deadline: String,
  status: { type: String, enum: ['Active', 'Inactive', 'Draft'], default: 'Active' }
}, { timestamps: true });

export default mongoose.model('Scheme', schemeSchema);
