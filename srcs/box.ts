import { ShowData } from "./interfaces";

export function generateBox(show: ShowData): string {
    return `
<div align="center">
  <table border="0" cellspacing="0" cellpadding="0" style="background-color: #2b2b2b; border-collapse: collapse; border-radius: 4px; overflow: hidden; width: 100%; max-width: 800px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
    <tr>
      <td width="50%" valign="middle" style="padding: 24px;">
        <table border="0" cellspacing="0" cellpadding="0" style="height: 100%; width: 100%; border-collapse: collapse;">
          
          <tr>
            <td valign="top" style="text-align: left; padding-bottom: 0;">
              <a href="https://www.nts.live" target="_blank">
                <img src="${show.NTSLogo}" alt="NTS Logo" height="50" style="display: block; border-radius: 2px;" />
              </a>
            </td>
          </tr>

          <tr>
            <td valign="bottom" style="text-align: left; color: #ffffff; padding-top: 40px;">
              
              <div style="margin-bottom: 16px;">
                <a href="${show.soundcloud}" target="_blank" style="text-decoration: none; display: inline-block;">
                  <div style="background-color: #808080; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 2px;">
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="0,0 20,11 0,22" fill="#2b2b2b"/>
                    </svg>
                  </div>
                </a>
              </div>

              <div style="color: #b3b3b3; font-size: 14px; margin-bottom: 6px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                ${show.date}
              </div>

              <h2 style="color: #ffffff; font-size: 22px; font-weight: bold; margin: 0 0 8px 0; line-height: 1.2; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                ${show.id}
              </h2>

              <div style="color: #ffffff; font-size: 12px; font-weight: bold; letter-spacing: 0.5px; margin-bottom: 12px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                ${show.generes}
              </div>

              <p style="color: #cccccc; font-size: 12px; line-height: 1.4; margin: 0; max-width: 360px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                ${show.description}
              </p>

            </td>
          </tr>
        </table>
      </td>

      <td width="50%" valign="middle" style="padding: 24px;">
        <a href="${show.link}" target="_blank">
          <img src="${show.img}" alt="Illustration" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
        </a>
      </td>
    </tr>
  </table>
</div>`;
}