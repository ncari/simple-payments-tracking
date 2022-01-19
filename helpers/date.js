// yyyy-mm-ddT:hh:mm:ss.sssZ -> yyyy-mm-dd hh:mm:ss
export const _formatDate = (date, h, m, s) => {
    let _date = new Date(date);
    _date.setUTCHours(h,m,s);
    _date = _date.toISOString().replace('T', ' ');
    _date = _date.replace(/\.[0-9][0-9][0-9]Z/, '');
    return _date;
}
  
export const _addDays = (date, days) => {
    let _date = new Date(date);
    _date.setDate(_date.getDate() + days);
    return _date;
}

export const _yyyy_mm_dd = (str) => {
    const _str = str.replace(/ [0-9][0-9]:[0-9][0-9]:[0-9][0-9]/, '');
    return _str;
}