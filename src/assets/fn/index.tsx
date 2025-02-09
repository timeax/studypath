import React, { ReactNode } from "react";
import calculator from 'number-precision';
import { ColorType } from "@typings/project";
//@ts-ignore
export function showIf<T = ReactNode | (() => any), R = any>(condition: any = false, El: T, elseNode: R = ''): any {
    if (condition) {
        //@ts-ignore0
        if (isFC(El)) return El();
        return El;
    }
    //@ts-ignore
    if (isFC(elseNode)) return elseNode();
    return elseNode;
}
function isFC(value: any): value is React.FC {
    return typeof value === 'function'
}


export function cutArr(arr: any, limit: number = 10) {
    if (!Array.isArray(arr)) return [];
    if (arr.length <= limit) return arr;

    return arr.slice(0, limit + 1);
}

export function getDate(date: string | Date) {
    const d = typeof date == 'string' ? new Date(date) : date;
    return {
        time: d.toLocaleTimeString(),
        date: d.toDateString(),
        get localTime() {
            return d.toLocaleDateString()
        },
        get miliseconds() {
            return d.getTime();
        }
    }
}

export function assets(resource: string) {
    resource = resource.replace(/\\/g, '/');
    if (resource.startsWith('http://') || resource.startsWith('https://')) return resource;
    //@ts-ignore
    resource = showIf(resource.startsWith('/'), resource.substring(1), resource);
    //---
    return '/storage/' + resource
}




export function lower<T extends string>(value: T): Lowercase<T> {
    return value.toLowerCase() as any;
}

export function upper<T extends string>(value: T): Capitalize<T> {
    return value.charAt(0).toUpperCase() + value.substring(1, value.length) as any;
}
/**
 * 
 * @param arr Array to sort
 * @param key If arr contains objects, provide the property that will serve as sorting acnhor
 * @param order values are -1 or 1, if -1 then acscending order
 * @returns sorted array
 */
export function sort<T>(arr: T[], key?: keyof T | none, order = -1) {
    var i, j, temp;
    var n = arr.length;
    var swapped;

    var g = (item: any) => {
        if (!key) return item;
        if (typeof key == 'string') return calculator.plus(item[key], 0);
        return item[key]
    }

    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (order == -1 ? (g(arr[j]) > g(arr[j + 1])) : g(arr[j]) < g(arr[j + 1])) {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // IF no two elements were
        // swapped by inner loop, then break
        if (swapped == false)
            break;
    }

    return arr;
}

export function classList(...names: Array<string | none>) {
    return names.filter(item => item).join(' ');
}

export function colorVar(name: ColorType, weight: any = '') {
    return `var(--color-${name})`;
}

export function transparency(color: string, trans: StringType) {
    return color.substring(0, color.length - 1) + '/ ' + trans + ')';
}

export function ft(num: number) {
    return calculator.divide(num, 16) + 'em';
}

//@ts-ignore
export function resolve<PageProps, L = React.FC<any>, T = React.ComponentProps<L>>(Layout: L, props: T, Page: React.FC<PageProps> | (() => React.JSX.Element), callback?: (props: any) => any,) {
    return function (params: PageProps) {
        const layoutProps = {
            ...props,
            ...(callback?.(params) || {})
        }
        //@ts-ignore
        return <Layout {...layoutProps}><Page {...params} /></Layout>;
    }
}

export function storage<T extends ArrayLike<T> | {}>(name: string) {
    interface Def {
        '{}': T | {},
        '[]': T[]
    }
    return {
        //@ts-ignore
        get<R extends keyof Def = '{}'>(def: R = '{}'): Def[R] {
            return JSON.parse(localStorage.getItem(name) || def);
        },

        set(value: T | T[]) {
            const data = JSON.stringify(value);
            localStorage.setItem(name, data);
        },

        push(...values: T[]) {
            const prevData = this.get('[]');
            prevData.push(...values);
            //@ts-ignore
            this.set(prevData);

            return prevData;
        },

        replace(value: (props: T) => T | none) {
            const all = this.get('[]')
            all.forEach((item, index) => {
                let replacement = value(item);
                if (replacement) {
                    all.splice(index, 1, replacement);
                }
            })

            this.set(all);
        }
    }
}

export function omit<T>(object: T, ...keys: Array<keyof T>): Omit<T, ElementType<typeof keys>> {
    keys.forEach(item => { delete object[item] });
    return object;
}


export function isNone(props: any): props is undefined {
    return !props;
}
