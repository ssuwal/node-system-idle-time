/* created typings file */
declare module '@paulcbetts/system-idle-time' {
    // export function getIdleTime(): number;
    interface SystemIdleTime {
      getIdleTime(): number;
    }
    const systemIdleTime: SystemIdleTime;
    export = systemIdleTime;
  }
  