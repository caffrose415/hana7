import { sum } from '@/lib/calc';

describe('calc - sum', () => {
  it('sum(0)', () => {
    expect(sum(0)).toBe(0);
  });

  it('sum(10) and sum(100)', () => {
    expect(sum(10)).toBe(10);
    expect([sum(10), sum(100)]).toContain(10);
    expect([sum(10), sum(100)]).toStrictEqual([10, 100]);
    expect({ ten: sum(10) }).toStrictEqual({ ten: 10 });
  });
});
