/* MLA Litigation Desk — data.js */

window.CATS      = ['Criminal','Civil','Commercial'];
window.STAGES    = ['Arguments','Final Arguments','Bail Hearing','Evidence','Trial','Filing','Hearing'];
window.PRIORITIES= ['normal','high','urgent'];
window.RISKS     = ['green','yellow','red'];
window.METHODS   = ['Cash','Bank Transfer','Cheque','Online'];

const SEED = [
  {id:'c1',no:'2024/Cr.C/1842',title:'State vs. Ahmad Raza',client:'Ahmad Raza',father:'Ghulam Raza',cnic:'42201-1234567-1',mobile:'0300-1234567',address:'House 12, Block-C, Gulshan-e-Iqbal, Bahawalpur',court:'Sessions Court South, Bahawalpur',judge:'Mr. Justice Tariq Mehmood',cat:'Criminal',stage:'Arguments',next:'2026-05-14',filed:'2024-01-15',prov:'PPC 302, 324, 34',fir:'FIR No. 45/2023',ps:'Clifton PS',opponent:'State / Complainant Family',opC:'Mr. Abdul Karim, PPP',strategy:'Alibi evidence to be presented. PWS-2 is key witness. Medical report discrepancies favorable.',jnotes:'Methodical. Prefers written arguments. Strict on time.',otactics:'Relying on CCTV — challenge authenticity.',settle:'Low',evwk:'No direct eyewitness. CCTV partial.',warn:'Witness intimidation risk. Client must not contact complainant family.',priority:'urgent',risk:'red',agreed:500000,received:350000,expense:25000,
   payments:[{date:'2024-01-15',amt:200000,method:'Cash',note:'Retainer'},{date:'2024-03-20',amt:150000,method:'Bank Transfer',note:'2nd installment'}],
   timeline:[{date:'2024-01-15',ev:'Case Filed',type:'filing'},{date:'2024-02-10',ev:'First Hearing',type:'hearing'},{date:'2024-03-05',ev:'Bail Granted (Interim)',type:'order'},{date:'2024-04-20',ev:'Evidence Commenced',type:'evidence'},{date:'2026-05-14',ev:'Arguments Scheduled',type:'arguments'}]},
  {id:'c2',no:'2023/CS/0291',title:'Fatima Bibi vs. Land Revenue',client:'Fatima Bibi',father:'Muhammad Aslam',cnic:'42301-9876543-2',mobile:'0321-9876543',address:'Village Gadap, Bahawalpur District',court:'Lahore High Court — Bahawalpur Bench',judge:'Hon. Justice Shafi Muhammad Memon',cat:'Civil',stage:'Evidence',next:'2026-05-22',filed:'2023-08-22',prov:'Specific Relief Act 1877, Land Revenue Act',fir:'',ps:'',opponent:'Land Revenue Department',opC:'AGP Office',strategy:'Revenue manipulation proven through documentary evidence.',jnotes:'Case progressing. Judge sympathetic to widow.',otactics:'Adjournment delays. File cost petitions.',settle:'Medium',evwk:'Original jamabandi missing.',warn:'Dept may appeal.',priority:'high',risk:'yellow',agreed:300000,received:150000,expense:15000,
   payments:[{date:'2023-08-22',amt:100000,method:'Cash',note:'Filing + retainer'},{date:'2024-01-10',amt:50000,method:'Cash',note:'Hearing'}],
   timeline:[{date:'2023-08-22',ev:'Writ Petition Filed',type:'filing'},{date:'2023-10-05',ev:'Notice to Revenue Dept',type:'hearing'},{date:'2024-06-10',ev:'Evidence Commenced',type:'evidence'}]},
  {id:'c3',no:'2024/Tr.C/0055',title:'Hassan Tariq vs. Insurance Co.',client:'Hassan Tariq',father:'Tariq Mahmood',cnic:'42201-5554443-3',mobile:'0333-5554443',address:'Plot 45, DHA Phase 6, Bahawalpur',court:'Civil Court I, Bahawalpur',judge:'Senior Civil Judge Kamran Ahmed',cat:'Civil',stage:'Trial',next:'2026-05-28',filed:'2024-03-10',prov:'Insurance Ordinance 2000, Contract Act 1872',fir:'',ps:'',opponent:'Jubilee Insurance Co. Ltd',opC:'Barrister Salman Akhtar',strategy:'Survey report challenged. Adjustor report contradicts repudiation.',jnotes:'Values written submissions.',otactics:'Counter non-disclosure claim.',settle:'High',evwk:'Delay in claim to justify.',warn:'Negotiate if offer exceeds 70%.',priority:'normal',risk:'green',agreed:200000,received:200000,expense:8000,
   payments:[{date:'2024-03-10',amt:100000,method:'Bank Transfer',note:'Initial'},{date:'2024-06-15',amt:100000,method:'Cheque',note:'Full payment'}],
   timeline:[{date:'2024-03-10',ev:'Suit Filed',type:'filing'},{date:'2024-04-20',ev:'Summons Issued',type:'hearing'},{date:'2024-11-20',ev:'Issues Framed',type:'order'}]},
  {id:'c4',no:'2022/SUIT/2201',title:'Rizwan Builders vs. Khan Estate',client:'Rizwan Builders Pvt. Ltd',father:'N/A',cnic:'NTN: 2234567-8',mobile:'021-35678900',address:'Office 301, Trade Centre, Bahawalpur',court:'Lahore High Court — Commercial Bench',judge:'Hon. Justice Ameer Hani Muslim',cat:'Commercial',stage:'Final Arguments',next:'2026-06-10',filed:'2022-11-05',prov:'Contract Act 1872, Specific Relief Act',fir:'',ps:'',opponent:'Khan Estate & Properties',opC:'Barrister Aamir Mansoor',strategy:'Agreement enforceable. Bank records prove full payment.',jnotes:'Brilliant judge. Detailed argumentation required.',otactics:'Delay tactics. File contempt if costs ignored.',settle:'Low',evwk:'WhatsApp communications may be challenged.',warn:'High profile. Confidentiality paramount.',priority:'high',risk:'green',agreed:1500000,received:1200000,expense:85000,
   payments:[{date:'2022-11-05',amt:500000,method:'Bank Transfer',note:'Retainer'},{date:'2023-03-15',amt:300000,method:'Cheque',note:'2nd'},{date:'2023-09-20',amt:300000,method:'Bank Transfer',note:'3rd'},{date:'2024-04-10',amt:100000,method:'Cash',note:'Hearing fee'}],
   timeline:[{date:'2022-11-05',ev:'Suit Filed',type:'filing'},{date:'2023-01-15',ev:'Interim Injunction',type:'order'},{date:'2024-01-10',ev:'Plaintiff Evidence Done',type:'evidence'},{date:'2025-02-20',ev:'Arguments Commenced',type:'arguments'}]},
  {id:'c5',no:'2025/Cr.C/0312',title:'State vs. Pervez Akhtar',client:'Pervez Akhtar',father:'Akhtar Hussain',cnic:'42101-7778889-5',mobile:'0345-7778889',address:'Korangi Industrial Area, Bahawalpur',court:'Additional Sessions Court III, Bahawalpur',judge:'ASJ Rashida Parveen',cat:'Criminal',stage:'Bail Hearing',next:'2026-05-17',filed:'2025-02-01',prov:'PPC 406, 420',fir:'FIR No. 12/2025',ps:'Korangi Industrial PS',opponent:'Muhammad Bashir (Complainant)',opC:'Malik Pervaiz, Advocate',strategy:'Bail on false implication. Commercial dispute mislabeled as criminal.',jnotes:'Fair judge. Requires strong legal grounds.',otactics:'Political backing. Focus on law.',settle:'Medium',evwk:'Cheque bounce to address pre-emptively.',warn:'Media interest likely. No press statements.',priority:'urgent',risk:'red',agreed:250000,received:50000,expense:5000,
   payments:[{date:'2025-02-01',amt:50000,method:'Cash',note:'Advance for bail'}],
   timeline:[{date:'2025-02-01',ev:'Engaged as Defense',type:'filing'},{date:'2025-02-15',ev:'Bail Application Filed',type:'filing'},{date:'2025-04-20',ev:'Prosecution Reply',type:'hearing'}]},
];

/* ── Storage ── */
window.getCases = function() {
  try {
    const s = localStorage.getItem('mla_cases');
    if (s) return JSON.parse(s);
  } catch(e) {}
  saveCases(SEED);
  return SEED;
};

window.saveCases = function(arr) {
  try { localStorage.setItem('mla_cases', JSON.stringify(arr)); } catch(e) {}
};

window.addCase = function(obj) {
  const arr = getCases();
  arr.push(obj);
  saveCases(arr);
};

window.updateCase = function(id, obj) {
  const arr = getCases().map(c => c.id === id ? Object.assign({}, c, obj) : c);
  saveCases(arr);
};

window.deleteCase = function(id) {
  saveCases(getCases().filter(c => c.id !== id));
};

/* ── Auth ── */
window.isAuthed    = () => localStorage.getItem('mla_auth') === '1';
window.requireAuth = () => { if (!isAuthed()) location.href = 'index.html'; };
window.logout      = () => { localStorage.removeItem('mla_auth'); location.href = 'index.html'; };

/* ── Utilities ── */
window.R = n => n != null ? '₨ ' + Number(n).toLocaleString('en-PK') : '₨ 0';

window.D = s => s
  ? new Date(s).toLocaleDateString('en-GB', {day:'2-digit', month:'short', year:'numeric'})
  : '—';

window.daysTo = s => Math.ceil((new Date(s) - new Date()) / 86400000);

window.todayStr = () => new Date().toISOString().slice(0, 10);

window.stageColor = s => ({
  'Arguments':      '#c9a444',
  'Final Arguments':'#c9a444',
  'Bail Hearing':   '#d45f5f',
  'Evidence':       '#5b8fd5',
  'Trial':          '#5b8fd5',
  'Filing':         '#8a8070',
  'Hearing':        '#8a8070'
}[s] || '#8a8070');

window.riskLabel = r => ({
  green:  'Reliable Payer',
  yellow: 'Slow Payer',
  red:    'Problematic Payer'
}[r] || '—');

window.riskColor = r => ({green:'#5a9f72', yellow:'#d4a020', red:'#d45f5f'}[r] || '#8a8070');

window.priColor = p => ({urgent:'#d45f5f', high:'#d4a020', normal:'#5b8fd5'}[p] || '#8a8070');
