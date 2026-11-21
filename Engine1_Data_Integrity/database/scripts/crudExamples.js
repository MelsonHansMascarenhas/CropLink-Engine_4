// Demonstration CRUD operations. Run only against a development database.
import Scheme from '../models/Scheme.js';

export async function createScheme(payload) { return Scheme.create(payload); }
export async function readSchemes(filters = {}) { return Scheme.find(filters).sort({ title: 1 }); }
export async function updateScheme(schemeId, changes) { return Scheme.findOneAndUpdate({ schemeId }, changes, { new: true, runValidators: true }); }
export async function deleteScheme(schemeId) { return Scheme.findOneAndDelete({ schemeId }); }
