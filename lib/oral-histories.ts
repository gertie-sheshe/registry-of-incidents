import fs from 'fs';
import path from 'path';
import type { OralHistory } from '@/types';

const DATA_DIR = path.join(process.cwd(), 'data/oral-histories');

function loadAllOralHistories(): OralHistory[] {
  const files = fs.readdirSync(DATA_DIR)
    .filter(f => f.endsWith('.json'))
    .sort();
  return files.map(file => {
    const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf-8');
    return JSON.parse(content) as OralHistory;
  });
}

export function getAllOralHistories(): OralHistory[] {
  return loadAllOralHistories();
}

export function getOralHistoryByRef(ref: string): OralHistory | undefined {
  return loadAllOralHistories().find(oh => oh.ref === ref);
}

export function getOralHistoriesByIncidentRef(incidentRef: string): OralHistory[] {
  return loadAllOralHistories().filter(oh => oh.incidentRef === incidentRef);
}
