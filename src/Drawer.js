import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
const MyDrawer = () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState("right");
    const showDrawer = () => {
        setOpen(true);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Space>
                <Radio.Group value={placement} onChange={onChange}>
                    <Radio value="top">top</Radio>
                    <Radio value="right">right</Radio>
                    <Radio value="bottom">bottom</Radio>
                    <Radio value="left">left</Radio>
                </Radio.Group>
                <Button type="primary" onClick={showDrawer}>
                    Open
                </Button>
            </Space>
            <Drawer
                title="Drawer with extra actions"
                placement={placement}
                width={500}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="primary" onClick={onClose}>
                            OK
                        </Button>
                    </Space>
                }
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};
export default MyDrawer;
