// Copyright 2026 Zyvor AI Labs · https://zyvor.dev
// SPDX-License-Identifier: LicenseRef-Zyvor-Production-1.0

use async_trait::async_trait;

#[async_trait]
pub trait NetworkDevice: Send + Sync {
    fn name(&self) -> &str;
    fn index(&self) -> u32;
}
