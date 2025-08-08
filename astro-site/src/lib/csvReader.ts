import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';

export interface Employee {
  name: string;
  title: string;
  manager: string;
  employmenttype: string;  // Changed to match the actual parsed field name
  team: string;
}

export interface TeamMember extends Employee {
  level: number;
  children?: TeamMember[];
}

export function readCSV(): Employee[] {
  const csvPath = path.join(process.cwd(), '..', 'data_ai_org.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  
  const result = Papa.parse<any>(csvContent, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header) => {
      const headerMap: Record<string, string> = {
        'Name': 'name',
        'Title': 'title',
        'Manager': 'manager',
        'Employment Type': 'employmentType',
        'Team': 'team'
      };
      return headerMap[header] || header.toLowerCase().replace(/\s+/g, '');
    }
  });

  return result.data as Employee[];
}

export function buildHierarchy(employees: Employee[]): TeamMember[] {
  const employeeMap = new Map<string, TeamMember>();
  const roots: TeamMember[] = [];

  employees.forEach(emp => {
    const member: TeamMember = {
      ...emp,
      level: 0,
      children: []
    };
    employeeMap.set(emp.name, member);
  });

  employees.forEach(emp => {
    const member = employeeMap.get(emp.name)!;
    
    if (!emp.manager || emp.manager === '') {
      member.level = 1;
      roots.push(member);
    } else {
      const manager = employeeMap.get(emp.manager);
      if (manager) {
        member.level = manager.level + 1;
        if (!manager.children) manager.children = [];
        manager.children.push(member);
      }
    }
  });

  return roots;
}

export function groupByTeam(employees: Employee[]): Map<string, Employee[]> {
  const teams = new Map<string, Employee[]>();
  
  employees.forEach(emp => {
    if (!teams.has(emp.team)) {
      teams.set(emp.team, []);
    }
    teams.get(emp.team)!.push(emp);
  });

  return teams;
}