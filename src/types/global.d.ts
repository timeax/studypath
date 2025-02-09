import cssprops from '@assets/fn/cssprops';
import { AxiosInstance } from 'axios';
import 'ziggy-js';
import { RouteParams } from './param';
import { FirebaseApp } from 'firebase/app';
import { Permission } from '@typings/model2';

declare global {
    interface Window {
        axios: AxiosInstance;
        firebase_app: FirebaseApp
    }

    interface Array<T> extends RelativeIndexable<T> {
        get(index: number): T | none;
        isEmpty(): boolean;
        paginate(size: number): T[];
        /**
         * Add objects to array while avoid duplicates
         * @param props Array of objects with a consistent key for dupliacte checking
         * @param id Filter by
         */
        add<R extends T>(id: string, ...props: R[]): number
        add<R extends T>(...props: R[]): number
    }
    // var route: typeof ziggyRoute;

    interface Empty { }

    type AppElement<T = Empty> = BaseElement & T;

    interface GlobalAttributes {
        className?: string;
        id?: string;
        tabIndex?: number;
        'data-section'?: string | number;
    }

    interface BaseElement extends React.DOMAttributes<any> {
        className?: string;
        children?: React.ReactNode;
        id?: string;
        tabIndex?: number;
        'data-section'?: string | number;
    }

    type none = null | undefined;

    interface DialogProps {
        hide(): void;
    }


    type Only<T, K extends keyof T> = {
        [x in K]: T[K];
    };


    type HTMLTags = [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "template",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "webview"
    ];

    type ElementType<T extends ReadonlyArray<unknown>> =
        T extends ReadonlyArray<infer ElementType> ? ElementType : never;

    type StyledProps = {
        //@ts-ignore
        [P in ElementType<typeof cssprops>]?: CSSProperties[P];
    } & Spacing

    interface Spacing {
        px?: string;
        py?: string;
        mx?: string;
        my?: string;
    }

    type RouteList = keyof RouteParams;

    type StringType = string | number;

    type Any<T = any> = Record<string, T>;

    interface Role {
        name: string;
        guard_name: string;
        id: StringType;
        permissions?: Permission[]
    }
}
