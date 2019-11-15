import { Component, Input } from '@angular/core';
import { trigger, transition, state, animate, style, AnimationEvent } from '@angular/animations';

@Component({
    selector: 'app-open-close',
    animations: [
        /**
         * trigger(name: string, definitions: AnimationMetadata[]): AnimationTriggerMetadata
         * 创建一个命名动画触发器，其中包含state()列表和`transition()`条目，当表达式绑定到触发器更改。
         *
         * @param name标识字符串。
         * @param definitions动画定义对象，包含一个state()数组和`transition()`声明。
         *
         * @return一个封装触发数据的对象。
         *
         */
        trigger('openClose', [
            state('open', style({
                height: '200px',
                opacity: 1,
                backgroundColor: 'yellow'
            })),
            state('closed', style({
                height: '100px',
                opacity: 0.5,
                backgroundColor: 'green'
            })),
            transition('open => closed', [
                /**
                 * animate ('duration delay easing')
                 * duration（持续时间）是必须的
                 * delay 的语法和 duration 一样
                 * easing 控制动画在运行期间如何进行加速和减速。
                 */
                animate('1s')
            ]),
            transition('closed => open', [
                animate('0.5s')
            ]),
            transition('* => closed', [
                animate('1s')
            ]),
            transition('* => open', [
                animate('0.5s')
            ]),
            transition('open <=> closed', [
                animate('0.5s')
            ]),
            transition('* => open', [
                animate('1s',
                    style({ opacity: '*' }),
                ),
            ]),
            transition('* => *', [
                animate('1s')
            ]),
        ]),
    ],
    templateUrl: 'open-closed.component.html',
    styleUrls: ['open-closed.component.scss']
})
export class OpenCloseComponent {
    isOpen = true;

    toggle() {
        this.isOpen = !this.isOpen;
    }

    @Input() logging = false;
    onAnimationEvent(event: AnimationEvent) {
        if (!this.logging) {
            return;
        }
        // openClose is trigger name in this example
        console.warn(`Animation Trigger: ${event.triggerName}`);

        // phaseName is start or done
        console.warn(`Phase: ${event.phaseName}`);

        // in our example, totalTime is 1000 or 1 second
        console.warn(`Total time: ${event.totalTime}`);

        // in our example, fromState is either open or closed
        console.warn(`From: ${event.fromState}`);

        // in our example, toState either open or closed
        console.warn(`To: ${event.toState}`);

        // the HTML element itself, the button in this case
        console.warn(`Element: ${event.element}`);
    }
}
