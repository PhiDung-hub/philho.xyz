---
title: Edge vs Cloud computing
date: '2022-10-05T00:00:00Z'
modifiedTime: '2022-11-08T00:00:00Z'
summary: ERC777 - tokens, ERC20, and beyond
image: 'nvim/cover.webp'
---

## Edge vs cloud

A cloud is an IT environment that abstracts, pools, and shares IT resources across a network. The edge refers to devices at or near the physical location of either the user or the source of the data. Cloud computing is the act of running workloads within clouds, while edge computing is the act of running workloads on edge devices.

Is an edge part of a cloud?
There isn’t always a clear line where one ends and the other begins. Although edge and cloud are related ideas, they’re also different.

_Edge devices_ can contribute to a cloud, if the storage and computing capabilities provided by those devices at the endpoints of a network are abstracted, pooled, and shared across a network—essentially becoming part of a larger cloud infrastructure.

_Edge computing_ is distinct from cloud computing by definition, since it describes workloads that happen in remote locations that are outside of what are normally considered cloud environment—closer to where a physical device or data source actually exists.

### Here’s one model for thinking about cloud and edge:

- **Clouds** are places where data can be stored or applications can run. They are software-defined environments created by datacenters or server farms.
- **Edges** are also places where data is collected. They are physical environments made up of hardware outside a datacenter.
- **Cloud** computing is an act; the act of running workloads in a cloud.
- **Edge** computing is also an act; the act of running workloads on edge devices.

An edge (location) is not the same thing as edge computing (action). Collecting data at the edge of a network and transferring it to a cloud with minimal (if any) modification is not edge computing—it’s just networking.

But, if that data is collected and processed at the edge, then it’s edge computing.

### Edge computing is separate from clouds for 2 main reasons:

1. **Time sensitivity** - The rate at which a decision needs to be made doesn’t allow for the lag that would normally take place as data is collected by an edge device, transferred to a central cloud without modification, and then processed before a decision is sent back to the edge device for execution.
2. **Data volume** - The sheer volume of data collected is too much to send—unaltered—to a cloud.

## Cloud, edge, and IoT

Internet of Things (IoT) refers to any system of physical devices that receive and transfer data over wireless networks with limited human intervention. Cloud, edge, and IoTl can all be connected. But they don’t have to be connected.

Clouds can exist without the Internet of Things (IoT) or edge devices. IoT and edge can exist without clouds. IoT can exist without edge devices or edge computing. IoT devices may connect to an edge or a cloud. Some edge devices connect to a cloud or private datacenter, others edge devices only connect to similarly central locations intermittently, and others never connect to anything—at all.

But edge computing, when used as part of manufacturing, mining, processing, or shipping operations rarely exists without IoT. That’s because IoT devices—everyday physical objects that collect and transfer data or dictate actions like controlling switches, locks, motors, or robots—are the sources and destinations that edge devices process and activate without relying on a central location or cloud.

For example:

+ Home automation is generally an IoT exercise. Your phone and smart home devices (light bulbs, thermostats, and outlets) are all IoT devices, because they simply send data—and execution decisions—back and forth (sometimes through a cloud). Neither your phone nor smart devices are processing the data they collect.

+ Satellite imagery—like the kind being used on the International Space Station (ISS)— is an edge computing exercise. Edge devices physically located on the ISS are running containerized analytical code as a single-node Red Hat<sup>®</sup> OpenShift<sup>®</sup> cluster that connects to IBM Cloud on Earth. Only images that are worth transfering are sent down to the ground. Edge computing is a necessary step here because the sheer volume of data collected is too much to send to an Earth-based cloud.
