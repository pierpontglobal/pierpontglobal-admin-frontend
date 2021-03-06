import React from 'react';
import {FuseExample, FuseHighlight, FusePageSimple} from '@fuse';
import {Button, Icon, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles/index';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint no-unused-vars: off */
const styles = theme => ({
    layoutRoot: {
        '& .description': {
            marginBottom: 16
        }
    }
});

function TextFields({classes})
{
    return (

        <FusePageSimple
            classes={{
                root: classes.layoutRoot
            }}
            header={
                <div className="flex flex-1 items-center justify-between p-24">
                    <Typography variant="h6">Text Fields</Typography>
                    <Button
                        className="normal-case"
                        variant="contained"
                        component="a"
                        href="https://material-ui-next.com/demos/text-fields"
                        target="_blank"
                    >
                        <Icon className="mr-4">link</Icon>
                        Reference
                    </Button>
                </div>
            }
            content={
                <div className="p-24 max-w-2xl mx-auto">
                    <Typography className="text-44 mt-32 mb-8" component="h1">Text Fields</Typography>
                    <Typography className="description">Text fields let users enter and edit text.</Typography>

                    <Typography className="mb-16" component="div"><a href="https://material.io/design/components/text-fields.html">Text fields</a> allow users to enter text into a
                        UI. They typically appear in forms and dialogs.</Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">TextField</Typography>
                    <Typography className="mb-16" component="div">The <code>TextField</code> wrapper component is a complete form control including a label, input and help
                        text.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/text-fields/TextFields.jsx').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/TextFields.jsx')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Outlined</Typography>
                    <Typography className="mb-16" component="div"><code>TextField</code> supports outlined styling.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/text-fields/OutlinedTextFields.jsx').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/OutlinedTextFields.jsx')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Filled</Typography>
                    <Typography className="mb-16" component="div"><code>TextField</code> supports filled styling.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/text-fields/FilledTextFields.jsx').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/FilledTextFields.jsx')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Components</Typography>
                    <Typography className="mb-16" component="div"><code>TextField</code> is composed of smaller components (
                        <a href="/api/form-control/"><code>FormControl</code></a>,
                        <a href="/api/input/"><code>Input</code></a>,
                        <a href="/api/filled-input/"><code>InputLabel</code></a>,
                        <a href="/api/input-label/"><code>InputLabel</code></a>,
                        <a href="/api/outlined-input/"><code>OutlinedInput</code></a>,
                        and <a href="/api/form-helper-text/"><code>FormHelperText</code></a>
                        ) that you can leverage directly to significantly customize your form inputs.</Typography>
                    <Typography className="mb-16" component="div">You might also have noticed that some native HTML input properties are missing from
                        the <code>TextField</code> component.
                        This is on purpose.
                        The component takes care of the most used properties, then it&#39;s up to the user to use the underlying component shown in the following demo. Still, you
                        can use <code>inputProps</code> (and <code>InputProps</code>, <code>InputLabelProps</code> properties) if you want to avoid some boilerplate.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/text-fields/ComposedTextField.jsx').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/ComposedTextField.jsx')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Inputs</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/text-fields/Inputs.jsx').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/Inputs.jsx')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Layout</Typography>
                    <Typography className="mb-16" component="div"><code>TextField</code>, <code>FormControl</code> allow the specification of <code>margin</code> to alter the
                        vertical spacing of inputs. Using
                        <code>none</code> (default) will not apply margins to the <code>FormControl</code>, whereas <code>dense</code> and <code>normal</code> will as well as alter
                        other styles to meet the specification.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/text-fields/TextFieldMargins.jsx').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/TextFieldMargins.jsx')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Input Adornments</Typography>
                    <Typography className="mb-16" component="div"><code>Input</code> allows the provision of <code>InputAdornment</code>.
                        These can be used to add a prefix, a suffix or an action to an input.
                        For instance, you can use an icon button to hide or reveal the password.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/text-fields/InputAdornments.jsx').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/InputAdornments.jsx')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Filled Input Adornments</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/text-fields/FilledInputAdornments.jsx').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/FilledInputAdornments.jsx')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Outlined Input Adornments</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/text-fields/OutlinedInputAdornments.jsx').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/OutlinedInputAdornments.jsx')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Formatted inputs</Typography>
                    <Typography className="mb-16" component="div">You can use third-party libraries to format an input.
                        You have to provide a custom implementation of the <code>&lt;input&gt;</code> element with the <code>inputComponent</code> property.</Typography>
                    <Typography className="mb-16" component="div">The following demo uses the <a href="https://github.com/text-mask/text-mask">react-text-mask</a> and <a
                        href="https://github.com/s-yadav/react-number-format">react-number-format</a> libraries.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/text-fields/FormattedInputs.jsx').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/FormattedInputs.jsx')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Customized inputs</Typography>
                    <Typography className="mb-16" component="div">If you have been reading the <a href="/customization/overrides/">overrides documentation page</a>
                        but you are not confident jumping in, here&#39;s an example of how you can change the main color of an Input.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/text-fields/CustomizedInputs.jsx').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/CustomizedInputs.jsx')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">With icon</Typography>
                    <Typography className="mb-16" component="div">Icons can be specified as prepended or appended.</Typography>
                    <Typography className="mb-16" component="div"><FuseExample
                        className="my-24"
                        component={require('main/content/components/material-ui/material-ui-examples/text-fields/InputWithIcon.jsx').default}
                        raw={require('!raw-loader!main/content/components/material-ui/material-ui-examples/text-fields/InputWithIcon.jsx')}
                    /></Typography>
                    <Typography className="text-32 mt-32 mb-8" component="h2">Limitations</Typography>
                    <Typography className="mb-16" component="div">The input label &quot;shrink&quot; state isn&#39;t always correct.
                        The input label is supposed to shrink as soon as the input is displaying something.
                        In some circumstances, we can&#39;t determine the &quot;shrink&quot; state (number input, datetime input, Stripe input). You might notice an
                        overlap.</Typography>
                    <Typography className="mb-16" component="div"><img src="/static/images/text-fields/shrink.png" alt="shrink"/></Typography>
                    <Typography className="mb-16" component="div">To workaround the issue, you can force the &quot;shrink&quot; state of the label.</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {`
<TextField InputLabelProps={{ shrink: true }} />
`}
                    </FuseHighlight>
                    <Typography className="mb-16" component="div">or</Typography>

                    <FuseHighlight component="pre" className="language-jsx">
                        {`
<InputLabel shrink>Count</InputLabel>
`}
                    </FuseHighlight>

                </div>
            }
        />

    );
}

export default withStyles(styles, {withTheme: true})(TextFields);
