import {JSX} from "react";
import Image from "next/image";

export const runCommand: (command: string) => JSX.Element = (command: string) => {
    switch (command) {
        case "help": {
            return <div style={{display: "grid", gridTemplateColumns: "auto auto"}}>
                <p>help</p>
                <p>获取命令列表</p>
                <p>clear</p>
                <p>清空终端</p>
                <p>exit</p>
                <p>退出终端</p>
                <p>whoarewe</p>
                <p>了解我们</p>
                <p>howtocontact</p>
                <p>联系我们</p>
                <p>snake</p>
                <p>玩玩贪吃蛇（游戏中输入q退出游戏到终端）</p>
            </div>
        }

        case "whoarewe": {
            return <div>
                <p style={{textIndent: "2em"}}>我们是谁？</p>
                <p style={{textIndent: "2em"}}>我们是一群追求自由、向往用技术改变世界的极客。我们是学生在线中心技术 Web
                    开发部。</p>
                <p style={{textIndent: "2em"}}>开发惊艳、强交互性的 Web
                    网站是我们的原始使命。除此之外，无论你是初入编程开发技术的新猿，还是已经在圈中遨游多年的老鸟，都能够在这里找到归处。</p>
                <p style={{textIndent: "2em"}}>我们的技术栈包括近年来火热的“AI 语言” Python、强大的全栈语言 JavaScript
                    等，但绝不止如此。</p>
                <p style={{textIndent: "2em"}}>在这里，我们不仅仅追求技术上的突破，更关注团队合作与创新思维的培养。每个成员都可以在实际项目中锻炼自己，从项目构思、开发到最终上线的每一步，我们都注重细节，力求完美。</p>
                <p style={{textIndent: "2em"}}>除了技术能力的提升，社交和表达能力也是我们成长路上的重要部分。定期的技术分享会、代码审查和讨论是我们提升自我、互相学习的最佳途径。我们鼓励开放、包容的氛围，让每一个声音都能被听到。</p>
                <p style={{textIndent: "2em"}}>当然，面对日新月异的技术变革，我们始终保持学习的态度。新的框架、新的工具，甚至新的编程范式，都是我们不断探索和追求的目标。只有通过不断的学习和实践，我们才能站在技术发展的最前沿。</p>
                <p style={{textIndent: "2em"}}>我们相信，技术改变世界的力量源自于每一个开发者的努力和坚持。在学生在线中心技术
                    Web
                    开发部，我们每个人都是技术梦想的追逐者，也是未来互联网世界的塑造者。无论你是想打下扎实的技术基础，还是渴望探索前沿技术，我们的团队都欢迎你的加入。</p>

            </div>
        }

        case "howtocontact": {
            return <div>
                <p>你可以通过以下方式联系我们：</p>
                <table className={"table w-full text-center"} style={{border: "1px #0fa solid"}}>
                    <tbody>
                    <tr>
                        <th>职位</th>
                        <th>姓名</th>
                        <th>电话</th>
                        <th>QQ</th>
                    </tr>
                    <tr>
                        <td>站长</td>
                        <td>雷馥菡</td>
                        <td>13844849246</td>
                        <td>1051398223</td>
                    </tr>
                    <tr>
                        <td>副站长</td>
                        <td>孙钺涛</td>
                        <td></td>
                        <td>404855445</td>
                    </tr>
                    <tr>
                        <td>前端总监</td>
                        <td>傅思远</td>
                        <td>17722177190</td>
                        <td>2438814689</td>
                    </tr>
                    <tr>
                        <td>后端总监</td>
                        <td>谢海伦</td>
                        <td>17606372670</td>
                        <td>2509849232</td>
                    </tr>
                    <tr>
                        <td>总监助理</td>
                        <td>刘博宇</td>
                        <td>18283236061</td>
                        <td>3330307304</td>
                    </tr>
                    </tbody>
                </table>

                <p>或者可以加入我们的纳新QQ群组，和我们共同成长：</p>
                <p>
                    <Image src="/qr.png" alt="qr code" width={1500} height={1500} style={{width: "50%"}}/>
                </p>
            </div>
        }

        case "clear": {
            return <>clear</>
        }

        case "exit": {
            return <>exit</>
        }

        case "snake": {
            return <>snake</>
        }

        default: {
            return <div>The command `{command}` is invalid.</div>
        }
    }
}