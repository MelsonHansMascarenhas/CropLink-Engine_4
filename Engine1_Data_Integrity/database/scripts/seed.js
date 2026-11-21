import 'dotenv/config';
import mongoose from 'mongoose';
import Scheme from '../models/Scheme.js';
import Service from '../models/Service.js';
import { schemes, services } from '../seed/seedData.js';

const uri = process.env.MONGODB_URI;
if (!uri) { console.error('Set MONGODB_URI in your environment.'); process.exit(1); }
try {
  await mongoose.connect(uri);
  await Scheme.deleteMany({}); await Service.deleteMany({});
  await Scheme.insertMany(schemes); await Service.insertMany(services);
  console.log(`Seeded ${schemes.length} schemes and ${services.length} services.`);
} catch (error) { console.error(error); process.exitCode = 1; } finally { await mongoose.disconnect(); }
