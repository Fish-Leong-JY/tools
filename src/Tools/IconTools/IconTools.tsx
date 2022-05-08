import { Form, Input, Button, Checkbox } from 'antd';
import TextArea from "antd/es/input/TextArea";
import {useState} from "react";

const IconTools = () => {
    const [out,changeOut] = useState("")

    const onFinish = (values: any) => {
        console.log('Success:', values);
        let svg = values.svg;
        let findT = / t="(.*?)"/g
        let changeT:any = (svg.match(findT));
        changeT = changeT[0].replace("t","d")
        svg = svg.replace(findT,changeT)
        svg = svg.replace("class","className")
        let name = values.name
        name = name.charAt(0).toUpperCase() + name.slice(1)
        let out =""
        out += `const ${name+"Svg"} = ()=>{\n`
        out += `    return ${svg}\n`
        out += `}\n`
        out += `export const ${name+"Icon"} = () => {\n`
        out+=`    return <Icon component={${name+"Svg"}}  />;\n`
        out+=`};\n`

        changeOut(out)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
    <>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="svg代码"
                name="svg"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                label="name"
                name="name"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        <TextArea value ={out} rows={4} />
    </>
);
};

export default IconTools;
