import category from "./documents/category";
import createSchema from "part:@sanity/base/schema-creator";
import lesson from "./documents/lesson";
import portableText from "./objects/portableText";
import schemaTypes from "all:part:@sanity/base/schema-type";
import textSection from "./objects/textSection";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    /* Objects */
    portableText,
    textSection,

    /** Documents */
    lesson,
    category,
  ]),
});
