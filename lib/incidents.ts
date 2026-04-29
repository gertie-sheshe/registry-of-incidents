import fs from 'fs';
import path from 'path';
import type { Incident } from '@/types';

const DATA_DIR = path.join(process.cwd(), 'data/incidents');

function loadAllIncidents(): Incident[] {
  const files = fs.readdirSync(DATA_DIR)
    .filter(f => f.endsWith('.json'))
    .sort();
  return files.map(file => {
    const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf-8');
    return JSON.parse(content) as Incident;
  });
}

export function getAllIncidents(): Incident[] {
  return loadAllIncidents();
}

export function getIncidentByRef(ref: string): Incident | undefined {
  return loadAllIncidents().find(i => i.ref === ref);
}

export function getFeaturedIncidents(): Incident[] {
  return loadAllIncidents().filter(i => i.featured);
}

export function getOpenIncidents(): Incident[] {
  return loadAllIncidents().filter(i => i.status === 'OPEN');
}

export function getDisputedIncidents(): Incident[] {
  return loadAllIncidents().filter(i => i.status === 'DISPUTED');
}
